const express = require("express");
var router = express.Router();
const messageController = require("../controllers/message");

router.post("/share", messageController.sendMessage);
router.get("/view/myMessages", messageController.myMessages);
router.get("/view/myOffers", messageController.myOffers);
router.get("/buy/:idPhoto/:idOwner", messageController.buyPhoto);

module.exports = router; 