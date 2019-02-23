const express = require("express");
const router = express.Router();

const commentCtrl = require("../controllers/commentCt");

router.delete("/:id", commentCtrl.deleteComment);
router.post("/", commentCtrl.postComm);
router.get("/edit/:id", commentCtrl.getCommentEditForm);
router.put("/:id", commentCtrl.putCommentEdit);

module.exports = router;
