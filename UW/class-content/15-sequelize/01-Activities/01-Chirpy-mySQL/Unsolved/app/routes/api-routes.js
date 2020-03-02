// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require('../config/connection.js');

// Routes
// =============================================================
module.exports = function(app) {
  // Get all chirps

  app.get('/api/all', (req, res) => {
    connection.query('SELECT * FROM chirp;', function(err, data) {
      if (err) {
        throw err;
      }

      res.send(data);
    });
  });

  // Add a chirp
  app.post('/api/new', (req, res) => {
    const { author, body, created_at } = req.body;

    connection.query(
      'INSERT INTO chirp (author, chirp, time_created) VALUES (?, ? ,?)',
      [author, body, created_at],
      function(err, data) {
        if (err) {
          throw err;
        }
        console.log('success');
        res.end();
      }
    );
  });
};
