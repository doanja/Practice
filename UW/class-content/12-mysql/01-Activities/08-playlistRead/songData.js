var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: 'test',
  database: 'playlist_db'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
  afterConnection();
  getGenre('rock');
});

function afterConnection() {
  connection.query('SELECT * FROM songs', function(err, res) {
    if (err) throw err;
    console.log(res);
    // connection.end();
  });
}

function getGenre(pop) {
  connection.query('SELECT * FROM songs WHERE ?', { genre: pop }, function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}
