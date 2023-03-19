const express = require("express");
var router = express.Router();
const messageController = require("../controllers/message");

router.post("/share", messageController.sendMessage);
router.get("/view/myMessages", messageController.myMessages);
router.get("/user/:idUserEmiting", messageController.userEmitting)

router.get("/view/myOffers", messageController.myOffers);
router.get("/user/myOffers/:idUserEmiting", messageController.userEmittingOferta)

router.get("/buy/:idPhoto/:idOwner", messageController.buyPhoto);

module.exports = router; 