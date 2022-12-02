const express = require("express");
var router = express.Router();
const userController = require("../controllers/user");

router.get('/profile', userController.viewProfile);

module.exports = router;
