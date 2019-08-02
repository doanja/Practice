const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const db = require("./config/keys").MongoURI; // db config
const app = express();
const PORT = process.env.PORT || 5000;

// database
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("mongodb connected..."))
  .catch(err => console.log(err));

// ejs
app.use(expressLayouts);
app.set("view engine", "ejs");

// bodyparser
app.use(express.urlencoded({ extended : false}));

// Routes
app.use("/", require("./routes/index.js"));
app.use("/users", require("./routes/users.js"));

app.listen(PORT, console.log(`Server started on port ${PORT}`));
