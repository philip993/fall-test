const express = require("express");
const router = express.Router();

const pagesCtrl = require("../controllers/pagesCt");

router.get("/", pagesCtrl.getIndex);

module.exports = router;
