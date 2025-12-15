const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.post("/signup", usersController.signUpUser);
router.post("/login", usersController.loginUser);

module.exports = router;