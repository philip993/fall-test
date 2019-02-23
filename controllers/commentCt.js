const { Comm } = require("../models/Comm");
const { User } = require("../models/User");
const { Post } = require("../models/Post");

exports.deleteComment = (req, res) => {
  Comm.findByIdAndRemove({ _id: req.params.id }).then(comment => {
    res.redirect("/posts/all");
  });
};

exports.postComm = (req, res) => {
  console.log(req.body);
  const comment = new Comm({
    bodyComment: req.body.bodyComment,
    linked: req.body.linked,
    person: req.body.person
  });

  comment.save().then(comment => {
    res.redirect("/posts/all");
  });
};

exports.getCommentEditForm = (req, res) => {
  Comm.findOne({ _id: req.params.id }).then(comment => {
    res.render("comments/edit", {
      comment: comment
    });
  });
};

exports.putCommentEdit = (req, res) => {
  Comm.findOne({ _id: req.params.id }).then(comment => {
    comment.bodyComment = req.body.bodyComment;

    comment.save().then(res.redirect("/posts/all"));
  });
};
