const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


// load user model
const User = require('../models/User');

module.exports = function(passport){
    passport.use(
        new LocalStrategy({usernameField : 'email'}, (email, password, done) => {
            // match user
            User.findOne({ email : email})
            .then(user => {
                if(!user){
                    return done(null, false, { message: 'that email is not registered' });
                }
                // match password
                bcrypt.compare(password, user.password);
            })
            .catch(err => console.log(err));
        })
    );
}