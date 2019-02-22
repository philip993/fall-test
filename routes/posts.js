const express = require("express");
const router = express.Router();

const postCtrl = require("../controllers/postCt");

router.get("/", postCtrl.getPostMenu);
router.get("/add", postCtrl.getPostForm);
router.post("/all", postCtrl.postNewPost);
router.get("/all", postCtrl.getAllPosts);
router.delete("/:id", postCtrl.deletePost);
router.get("/private", postCtrl.getPrivatePosts);
router.get("/:id", postCtrl.getOnePage);
router.post("/comments", postCtrl.postComments2);
router.get("/comments/all", postCtrl.getComments);

module.exports = router;
