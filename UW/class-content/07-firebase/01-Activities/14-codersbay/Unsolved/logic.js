// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyC8Qq1rXCBqYRFqLx3VeeJhjhgncgP6hCo',
  authDomain: 'monday-9-30-19.firebaseapp.com',
  databaseURL: 'https://monday-9-30-19.firebaseio.com',
  storageBucket: 'monday-9-30-19.appspot.com'
};

firebase.initializeApp(config);
var database = firebase.database();

// Assign the reference to the database to a variable named 'database'
// var database = ...

// Initial Values
var initialBid = 0;
var initialBidder = 'No one :-(';
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on(
  'value',
  function(snapshot) {
    // If Firebase has a highPrice and highBidder stored (first case)
    if (
      snapshot.child('highBidder').exists() &&
      snapshot.child('highPrice').exists()
    ) {
      // Set the variables for highBidder/highPrice equal to the stored values in firebase.
      highPrice = snapshot.val().highPrice;
      highBidder = snapshot.val().highBidder;
      // Change the HTML to reflect the stored values
      $('#highest-bidder').text(highBidder);
      $('#highest-price').text(highPrice);
      // Print the data to the console.
      console.log('highPrice :', highPrice);
      console.log('highBidder :', highBidder);
    }

    // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
    else {
      // Change the HTML to reflect the initial values
      $('#highest-bidder').text(initialBid);
      $('#highest-price').text(initialBidder);
      // Print the data to the console.
      console.log('initialBid :', initialBid);
      console.log('initialBidder :', initialBidder);
    }

    // If any errors are experienced, log them to console.
  },
  function(errorObject) {
    console.log('The read failed: ' + errorObject.code);
  }
);

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$('#submit-bid').on('click', function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  const bidderPrice = parseInt($('#bidder-price').val());
  const bidderName = $('#bidder-name').val();
  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {
    // Alert
    alert('You are now the highest bidder.');

    // Save the new price in Firebase
    database.ref().set({
      highPrice: bidderPrice,
      highBidder: bidderName
    });
    // Log the new High Price
    console.log('highPrice :', highPrice);
    console.log('bidderName :', bidderName);
    // Store the new high price and bidder name as a local variable
    highPrice = highPrice;
    highBidder = bidderName;
    // Change the HTML to reflect the new high price and bidder
  } else {
    // Alert
    alert('Sorry that bid is too low. Try again.');
  }
});
