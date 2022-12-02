const express = require("express");
var router = express.Router();
const { Comment, Label, Photo, Photorating, User } = require("../models");
const authController = require("../controllers/auth");

router.get('/almacenar', async function (req, res, next) {
    const users = await User.findAll();
    res.render("almacenar", { users: users })
  });
  
  router.get('/target', function (req, res, next) {
    res.render("target-view-top")
  });
  
  router.get('/msg', function (req, res, next) {
    res.render("messages-section")
  });


module.exports = router;