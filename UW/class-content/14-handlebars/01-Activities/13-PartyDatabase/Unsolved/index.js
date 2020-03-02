var express = require("express");
var orm = require("./config/orm.js");

var app = express();

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

orm.selectAndOrder("party_name", "parties", "party_name");

orm.selectAndOrder("client_name", "clients", "client_name");

orm.selectWhere("parties", "party_type", "grown-up");

orm.findWhoHasMost(
  "client_name",
  "client_id",
  "clients",
  "parties",
  "client.id",
  "parties.client.id",
  "client",
  "client.id"
);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
