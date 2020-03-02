const axios = require('axios');
const fs = require('fs');

var TV = function() {
  this.findShow = function(show = 'mr. nobody') {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = 'http://api.tvmaze.com/singlesearch/shows?q=' + show;

    axios
      .get(URL)
      .then(res => {
        console.log(`Name: ${res.data.name}`);
        console.log(`Genres: ${res.data.genres.join(',')}`);
        console.log(`Average Rating: ${res.data.rating.average}`);
        console.log(`Network: ${res.data.network.name}`);
        console.log(`Summary: ${res.data.summary.replace(/<(.|\n)*?>/g, '')}`);
        console.log('----------------------------------------------------------');

        this.writeFile(res.data.name);
        this.writeFile(res.data.genres.join(', '));
        this.writeFile(res.data.rating.average);
        this.writeFile(res.data.network.name);
        this.writeFile(res.data.summary.replace(/<(.|\n)*?>/g, ''));
        this.writeFile('------------------------------------');
      })
      .catch(err => {
        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else if (err.request) {
          // The request was made but no response was received
          // `error.request` is an object that comes back with details pertaining to the error that occurred.
          console.log(err.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', err.message);
        }
        console.log(err.config);
      });
  };

  this.findActor = function(show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = 'http://api.tvmaze.com/search/people?q=' + show;

    axios
      .get(URL)
      .then(res => {
        console.log(res.data);
        // console.log(`Name: ${res.data.name}`);
        // console.log(`Genres: ${res.data.genres.join(',')}`);
        // console.log(`Average Rating: ${res.data.rating.average}`);
        // console.log(`Network: ${res.data.network.name}`);
        // console.log(`Summary: ${res.data.summary.replace(/<(.|\n)*?>/g, '')}`);
        // console.log('----------------------------------------------------------');

        // this.writeFile(res.data.name);
        // this.writeFile(res.data.genres.join(', '));
        // this.writeFile(res.data.rating.average);
        // this.writeFile(res.data.network.name);
        // this.writeFile(res.data.summary.replace(/<(.|\n)*?>/g, ''));
        // this.writeFile('------------------------------------');
      })
      .catch(err => {
        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else if (err.request) {
          // The request was made but no response was received
          // `error.request` is an object that comes back with details pertaining to the error that occurred.
          console.log(err.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', err.message);
        }
        console.log(err.config);
      });
  };

  this.writeFile = function(text, filename = './log.txt') {
    // Next, we append the text into the "sample.txt" file.
    // If the file didn't exist, then it gets created on the fly.
    fs.appendFile(filename, text + '\n', err => {
      // If an error was experienced we will log it.
      if (err) {
        console.log(err);
      }
    });
  };
};

module.exports = TV;
