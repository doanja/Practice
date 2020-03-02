var mysql = require('mysql');
const inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'test',
  database: 'artists_db'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId + '\n');

  promptInput();
});

const promptInput = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What do you want to do?',
        choices: ['Search Songs by Artist', 'Reappearing Artists', 'Songs by Year Range', 'Search Song by Name'],
        name: 'option'
      }
    ])
    .then(res => {
      switch (res.option) {
        case 'Search Songs by Artist':
          promptArtistName();
          break;
        case 'Reappearing Artists':
          getSongsByReappearingArtists();
          break;
        case 'Songs by Year Range':
          promptYearRange();
          break;
        case 'Search Song by Name':
          promptSongName();
          break;
      }
    });
};

const promptArtistName = () => {
  inquirer.prompt([{ type: 'input', message: 'Enter artist name', name: 'name' }]).then(res => {
    getSongByArtistName(res.name);
  });
};

const promptYearRange = () => {
  inquirer
    .prompt([{ type: 'input', message: 'Enter starting year', name: 'start' }, { type: 'input', message: 'Enter ending year', name: 'end' }])
    .then(res => {
      getSongsByYearRange(parseInt(res.start), parseInt(res.end));
    });
};

const promptSongName = () => {
  inquirer.prompt([{ type: 'input', message: 'Enter song name', name: 'song' }]).then(res => {
    getSong(res.song);
  });
};

const getSongByArtistName = name => {
  connection.query('SELECT * FROM song WHERE ?', { artist: name }, function(err, res) {
    if (err) throw err;
    if (res.length == 0) {
      console.log('nothing found...');
    } else {
      console.log(res);
    }
    connection.end();
  });
};

const getSongsByReappearingArtists = () => {
  connection.query('SELECT artist, COUNT(*) as "Songs" FROM song GROUP BY artist HAVING COUNT(*) > 1', function(err, res) {
    if (err) throw err;
    if (res.length == 0) {
      console.log('nothing found...');
    } else {
      console.log(res);
    }
    connection.end();
  });
};

const getSongsByYearRange = (startingYear, endingYear) => {
  connection.query(`SELECT * FROM song WHERE year between ${startingYear} AND ${endingYear}`, function(err, res) {
    if (err) throw err;
    if (res.length == 0) {
      console.log('nothing found...');
    } else {
      console.log(res);
    }
    connection.end();
  });
};

const getSong = song => {
  connection.query(`SELECT * FROM song WHERE ?`, { song_name: song }, function(err, res) {
    if (err) throw err;
    if (res.length == 0) {
      console.log('nothing found...');
    } else {
      console.log(res);
    }
    connection.end();
  });
};
