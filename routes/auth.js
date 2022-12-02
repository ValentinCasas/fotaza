const express = require("express");
var router = express.Router();
const authController = require("../controllers/auth");


router.get("/logout", authController.cerrarSesion)
router.post('/singIn', authController.login);
router.get('/view/register', authController.viewRegister);
router.post('/register', authController.register);

router.get('/login', function (req, res, next) {
    res.render("login")
  });

var isAutenticatedBD = (req, res, next) => {
    if (req.session.isLoggedIn) return next();
    res.redirect("/");
}

module.exports.isAutenticatedBD = isAutenticatedBD;
module.exports.router = router; 