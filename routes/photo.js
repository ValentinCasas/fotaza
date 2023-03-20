const express = require("express");
var router = express.Router();
const photoController = require("../controllers/photo");
var isAutenticatedBD = require("../routes/auth").isAutenticatedBD;
var isAutenticated = require("../routes/auth").isAutenticated;



/* router.get("/", isAutenticated, photoController.cargarDatos);
router.get('/target-top/:id', isAutenticated, photoController.viewTarget);
router.get('/view/almacenar', isAutenticated, photoController.viewAlmacenarPhoto);
router.get('/sort/:manera', isAutenticated, photoController.sortPhoto);
router.post('/almacenar/submitPhoto', isAutenticated, photoController.submitPhoto);
router.get('/delete/:id', isAutenticated, photoController.deletePhoto);
router.get('/rating/:id/:numStar', isAutenticated, photoController.ratingPhoto)
router.post('/buscar', isAutenticated, photoController.buscarPhotos) */


router.get("/", isAutenticatedBD, photoController.cargarDatos);
router.get('/target-top/:id', isAutenticatedBD, photoController.viewTarget);
router.get('/view/almacenar', isAutenticatedBD, photoController.viewAlmacenarPhoto);
router.get('/sort/:manera', isAutenticatedBD, photoController.sortPhoto);
router.post('/almacenar/submitPhoto', isAutenticatedBD, photoController.submitPhoto);
router.get('/delete/:id', isAutenticatedBD, photoController.deletePhoto);
router.get('/rating/:id/:numStar', isAutenticatedBD, photoController.ratingPhoto)
router.post('/buscar', isAutenticatedBD, photoController.buscarPhotos)

module.exports = router; 