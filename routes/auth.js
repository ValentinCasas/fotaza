const express = require("express");
var router = express.Router();
const authController = require("../controllers/auth");
const passport = require('passport');

router.get("/error", authController.error);
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
/* module.exports.isAutenticated = isAutenticated; */
module.exports.router = router; 


//autenticacion con github
/* router.get("/github", passport.authenticate("github"));
router.get("/github/callback", passport.authenticate("github", { failureRedirect: "/auth/error" }),
  function (req, res) {
    res.redirect(301, "/photo")
  });

var isAutenticated = (req, res, next) => {
  if (req.user) return next();
  res.redirect("/");
} */