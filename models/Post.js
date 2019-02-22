const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  typeOfPost: {
    type: String,
    enum: ["Public", "Private", "Draft", "Announcement"],
    required: true
  },
  linked: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comm"
  }
});

const Post = mongoose.model("Post", postSchema);

exports.Post = Post;
