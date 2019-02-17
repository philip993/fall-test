const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/userCt");

router.get("/login", userCtrl.getLoginForm);
router.post("/login", userCtrl.postLogin);
router.get("/register", userCtrl.getRegisterForm);
router.post("/register", userCtrl.postRegister);

module.exports = router;
