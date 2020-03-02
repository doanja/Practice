const getEndYear = () => {
  const endYear = $('#end-year').val();

  // if nothing was entered into the input

  $('#end-year').val(''); // clear input

  return parseInt(endYear);
};

const getStartYear = () => {
  const startYear = $('#start-year').val();

  // if nothing was entered into the input

  $('#start-year').val(''); // clear input

  return parseInt(startYear);
};

const getNumRecords = () => {
  return parseInt($('option:selected').text());
};

const getSearchTerm = () => {
  const input = $('#search-term').val(); // store search term into input

  // if nothing was entered into the input
  if (input === '') {
    alert('You must enter a search term...');
  }

  // render gifs
  else {
    $('#search-term').val(''); // clear input
  }

  return input;
};

const getData = (/*key, numRecs, startYear, endYear*/) => {
  const numRecs = getNumRecords();
  // console.log('numRecs :', numRecs);
  const searchTerm = getSearchTerm();
  //   console.log('searchTerm :', typeof searchTerm);
  const key = '0nguddJMS7qWATmqd9tXCFUcUZ3DEEA5';
  let filter = '';
  //   const startYear = startYear();
  if (!Number.isNaN(getStartYear()) && !Number.isNaN(getEndYear())) {
    filter =
      '&fq=headline:(' +
      searchTerm +
      ') AND pub_year:[' +
      startYear +
      ' TO ' +
      endYear +
      ']';
  } else if (!Number.isNaN(getStartYear())) {
    filter =
      '&fq=headline:(' + searchTerm + ') AND pub_year:(' + startYear + ')';
  } else {
    filter = '&fq=headline:(' + searchTerm + ') AND pub_year:(' + endYear + ')';
  }

  $.ajax({ url: url, method: 'GET' }).then(res => {
    for (let i = 0; i < numRecs; i++) {
      console.log('res :', res.response.docs[i]);
    }

    // function to render and update top articles
  });
};

window.onload = () => {
  event.preventDefault();
  //   getData(key, 'election');
};
