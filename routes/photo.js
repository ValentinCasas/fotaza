const express = require("express");
var router = express.Router();
const photoController = require("../controllers/photo");
var isAutenticatedBD = require("../routes/auth").isAutenticatedBD;

router.get("/",isAutenticatedBD , photoController.cargarDatos);
router.get('/target-top/:id', photoController.viewTarget);
router.get('/view/almacenar', isAutenticatedBD, photoController.viewAlmacenarPhoto);
router.get('/sort/:manera', isAutenticatedBD, photoController.sortPhoto);
router.post('/almacenar/submitPhoto', isAutenticatedBD, photoController.submitPhoto);
router.get('/delete/:id',isAutenticatedBD ,photoController.deletePhoto);
router.get('/rating/:id/:numStar',isAutenticatedBD , photoController.ratingPhoto)

module.exports = router; 