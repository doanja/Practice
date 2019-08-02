const express = require("express");
const router = express.Router();
const User = require("../models/User"); // user model
const bcrypt = require("bcryptjs");

// login page
router.get("/login", (req, res) => res.render("login"));

// register page
router.get("/register", (req, res) => res.render("register"));

// register handle
router.post("/register", (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];

  // check required fields
  if (!name || !email || !password || !password2) {
    errors.push({ msg: "Please fill in all fields" });
  }

  // check passwords match
  if (password != password2) {
    errors.push({ msg: "Passwords do not match" });
  }

  // check password length
  if (password.length < 6) {
    errors.push({ msg: "Password should be at least 6 characters" });
  }

  // if any errors happen, reload the pages with the form fields in
  if (errors.length > 0) {
    res.render("register", {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    // validation passed
    User.findOne({ email: email }).then(data => {
      if (data) {
        // if user exists, re-render the page
        errors.push({ msg: "email is already registered" });
        res.render("register", {
          errors,
          name,
          email,
          password,
          password2
        });
      } else {
        const newUser = new User({
          name,
          email,
          password
        });
        // hash password
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
              if(err) throw err;
              // set password to hashed
              newUser.password = hash;
              // save user
              newUser.save()
              .then(user => {res.redirect('/login')})
              .catch(err => console.log(err));
          })
        );
      }
    });
  }
});

module.exports = router;
