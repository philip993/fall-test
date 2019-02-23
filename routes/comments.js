const express = require("express");
const router = express.Router();

const commentCtrl = require("../controllers/commentCt");

router.delete("/:id", commentCtrl.deleteComment);
router.post("/", commentCtrl.postComm);

module.exports = router;
