var express = require('express');
var router = express.Router();
const { Comment, Label, Photo, Photorating, User } = require("../models");


router.get('/', async function (req, res, next) {
  res.render("login");
});

router.get('/register', async function (req, res, next) {
  res.render("register");
});
 
module.exports = router;
