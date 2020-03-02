var mysql = require('mysql');
const inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'test',
  database: 'twotables_db'
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
        type: 'input',
        message: 'Enter artist',
        name: 'artist'
      }
    ])
    .then(res => {
      getSong(res.artist);
    });
};

const getSong = song => {
  connection.query(
    `select s.year as 'Year', a.id as 'Album Position', a.artist as 'Artist', s.song_name as 'Song', a.album_name as 'Album Name' from songs as s left join albums as a on s.artist = a.artist where a.artist = ?`,
    [song],
    function(err, res) {
      if (err) throw err;
      if (res.length == 0) {
        console.log('nothing found...');
      } else {
        console.log(res);
      }
      connection.end();
    }
  );
};
