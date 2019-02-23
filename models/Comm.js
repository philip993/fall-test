const mongoose = require("mongoose");
const { Post } = require("./Post");

const commSchema = new mongoose.Schema({
  bodyComment: {
    type: String,
    required: true
  },
  commentedOn: {
    type: Date,
    default: Date.now
  },
  linked: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  },
  person: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const Comm = mongoose.model("Comm", commSchema);

exports.Comm = Comm;
