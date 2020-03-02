// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the posts
  app.get('/api/posts', function(req, res) {
    db.Post.findAll({}).then(data => {
      res.json(data);
    });
  });

  // Get route for retrieving a single post
  app.get('/api/posts/:id', function(req, res) {
    db.Post.findOne({ where: { id: req.params.id } }).then(data => {
      res.json(data);
    });
  });

  // POST route for saving a new post
  app.post('/api/posts', function(req, res) {
    console.log('POST CREATED----------------------------------------');
    const { title, body, category } = req.body;
    db.Post.create({ title, body, category }).then(data => {
      res.json(data);
    });
  });

  // DELETE route for deleting posts
  app.delete('/api/posts/:id', function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // PUT route for updating posts
  app.put('/api/posts', function(req, res) {
    console.log('REQ BODY IS:', req.body);
    console.log('POST UPDATED------------------------------------------');
    const { title, body, category, id } = req.body;
    db.Post.update({ title, body, category }, { where: { id } }).then(data => {
      res.json(data);
    });
  });
};
