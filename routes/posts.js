const express = require("express");
const router = express.Router();

const postCtrl = require("../controllers/postCt");

router.get("/", postCtrl.getPostMenu);
router.get("/add", postCtrl.getPostForm);
router.post("/all", postCtrl.postNewPost);
router.get("/all", postCtrl.getAllPosts);
router.delete("/:id", postCtrl.deletePost);

module.exports = router;
