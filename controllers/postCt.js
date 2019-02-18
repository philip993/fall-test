const { Post } = require("../models/Post");
const { User } = require("../models/User");

exports.getPostForm = (req, res) => {
  res.render("posts/add");
};

exports.postNewPost = (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    username: req.user
  });

  post.save().then(post => {
    res.redirect("/posts");
  });
};

exports.getAllPosts = (req, res) => {
  Post.find({})
    .populate("username", "_id username")
    .then(posts => {
      res.render("posts/index", {
        posts: posts
      });
    });
};
