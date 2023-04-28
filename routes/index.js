var express = require('express');
var router = express.Router();
const { Comment, Label, Photo, Photorating, User } = require("../models");


router.get('/', async function (req, res, next) {
  const { error } = req.query;
  res.render("login", { error });
});

router.get('/register', async function (req, res, next) {
  const { error } = req.query;
  res.render("register", { error });
});

 
module.exports = router;
