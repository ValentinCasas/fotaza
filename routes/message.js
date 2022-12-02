const express = require("express");
var router = express.Router();
const messageController = require("../controllers/message");

router.post("/share", messageController.sendMessage);
router.get("/view/myMessages", messageController.myMessages);

module.exports = router; 