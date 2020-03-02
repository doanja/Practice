// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

const parseArguments = (args = process.argv) => {
  if (args.length <= 3) {
    console.log('arguments less than 3');
    console.log(process.argv);
    // run default case ?
    return;
  } else {
    const action = process.argv[2]; // grab show / actor
    const query = process.argv // parse the rest of arguments into a query string
      .slice(3)
      .join(' ')
      .replace(/ /g, '+');

    console.log('action:', action);
    console.log('query:', typeof query);

    // create instance of TV here

    switch (action) {
      case 'show':
        // code block axios show
        console.log('call axios get show on:', query);
        break;
      case 'actor':
        // code block axios actor
        console.log('call axios get actor on:', query);
        break;
      default:
        // code block axios actor something ...
        console.log('call axios on something... (this is the default case)');
    }
  }
};

parseArguments();
