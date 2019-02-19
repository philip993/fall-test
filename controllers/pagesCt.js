const { User } = require("../models/User");
exports.getIndex = (req, res) => {
  if (req.user) {
    res.render("pages/index", {
      user: req.user.username,
      firstName: req.user.firstName
    });
  }
};
