const passport = require("passport");
const bcrypt = require("bcryptjs");
const { User } = require("../models/User");

exports.getLoginForm = (req, res) => {
  res.render("users/login");
};

exports.postLogin = (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/users/login"
  })(req, res, next);
};

exports.getRegisterForm = (req, res) => {
  res.render("users/register");
};

exports.postRegister = (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) throw err;
      user.password = hash;

      user
        .save()
        .then(user => {
          res.redirect("/users/login");
        })
        .catch(er => {
          console.log(err);
          return;
        });
    });
  });
};
