const passport = require("passport");
const mongoose = require("mongoose");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const { User } = require("../models/User");

module.exports = function(passport) {
  passport.use(
    new LocalStrategy((username, password, done) => {
      User.findOne({ username: username }).then(user => {
        if (!user) {
          return done(null, false, { message: "No user found" });
        }

        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Password incorect" });
          }
        });
      });
    })
  );
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};

/*
passport.use(
  new LocalStrategy(function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorect username" });
      }
      if (user.validPassword(password)) {
        return done(null, false, { message: "Incorect password" });
      }
      return done(null, user);
    });
  })
);
*/
