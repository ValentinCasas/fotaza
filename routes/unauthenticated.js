const express = require("express");
var router = express.Router();
const unauthenticatedController = require("../controllers/unauthenticated");

router.get('/fotaza', unauthenticatedController.viewFotaza);
router.post('/buscar', unauthenticatedController.buscarPhotos)

module.exports = router; 