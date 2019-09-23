// run the addConnection() function in the console at https://www.linkedin.com/mynetwork/
const addConnection = () => {
    // retrieves all buttons into an array
    const a = document.getElementsByClassName('full-width artdeco-button artdeco-button--2 artdeco-button--full artdeco-button--secondary ember-view');

    // loop through all the buttons and call click()
    for ( let i = 0; i < a.length; i++){
        a[i].click();
    }
}

