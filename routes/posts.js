const express = require("express");
const router = express.Router();

const postCtrl = require("../controllers/postCt");

router.get("/add", postCtrl.getPostForm);
router.post("/", postCtrl.postNewPost);
router.get("/", postCtrl.getAllPosts);
router.delete("/:id", postCtrl.deletePost);

module.exports = router;
