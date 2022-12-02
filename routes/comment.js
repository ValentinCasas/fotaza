const express = require("express");
var router = express.Router();
const commentController = require("../controllers/comment");
var isAutenticatedBD = require("../routes/auth").isAutenticatedBD;

router.get('/view/:id', commentController.viewComment);
router.post('/sendComment', isAutenticatedBD, commentController.sendComment);


module.exports = router; 