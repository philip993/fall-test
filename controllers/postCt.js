const { Post } = require("../models/Post");
const { User } = require("../models/User");

exports.getPostMenu = (req, res) => {
  if (req.user) {
    res.render("posts/postMenu", {
      user: req.user.username,
      firstName: req.user.firstName
    });
  } else {
    res.render("posts/postMenu");
  }
};

exports.getPostForm = (req, res) => {
  res.render("posts/add");
};

exports.postNewPost = (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    username: req.user,
    typeOfPost: req.body.typeOfPost
  });

  post
    .save()
    .then(post => {
      res.redirect("/posts/all");
    })
    .catch(err => {
      console.log(err);
      res.redirect("/posts/add");
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

exports.deletePost = (req, res) => {
  Post.findOneAndDelete({ _id: req.params._id }).then(post => {
    res.redirect("/posts/all");
  });
};

exports.getPrivatePosts = (req, res) => {
  Post.find({ typeOfPost: "Private" })
    .populate("username", "_id username")
    .then(posts => {
      if (req.user) {
        res.render("posts/privatePost", {
          posts: posts,
          user: req.user.username,
          firstName: req.user.firstName
        });
      } else {
        res.render("posts/privatePost", {
          posts: posts
        });
      }
    });
};
