const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/userCt");

router.get("/login", userCtrl.getLoginForm);
router.post("/login", userCtrl.postLogin);
router.get("/register", userCtrl.getRegisterForm);
router.post("/register", userCtrl.postRegister);
router.get("/profile", userCtrl.getUser);
router.get("/logout", userCtrl.getLogout);

module.exports = router;
