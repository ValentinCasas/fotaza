const { Comment, Llabel, Photo, Photorating, User } = require("../models");
const bcrypt = require("bcrypt");
const uuid = require("uuid");


/* post '/singIn' */
exports.login = async function (req, res, next) {

    let { mail, password } = req.body;
    let = sessionId = req.sessionID;
    
    await User.update({ sessionId: sessionId }, { where: { email: mail } });

    const user = await User.findAll({ where: { email: mail } });

    if (user.length == 1) {
        const validado = await bcrypt.compare(password, user[0].password);
        if (validado) {
            console.log("autenticado!")
            req.session.isLoggedIn = true;
            res.redirect("/photo")
        } else {
            res.redirect("/")
        }
    } else {
        res.redirect("/");
    }
};

exports.cerrarSesion = function (req, res, next) {
    req.session.destroy();
    res.redirect("/");
}

/* post '/register' */
exports.register = async function (req, res) {

    const { name, surname, mail, interests } = req.body;
    let rutaImagen = "";

    if (req.files === null) {
        rutaImagen = "images/noAutenticated.jpg";
    } else {
        const { imagen } = req.files;

        rutaImagen = uuid.v1() + imagen.name;
        console.log(rutaImagen);
        imagen.mv("./public/profile-images/" + rutaImagen);
    }


    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    await User.findOne({ where: { email: mail } })
        .then(user => {
            if (!user) {
                User.create({
                    name: name,
                    surname: surname,
                    email: mail,
                    password: password,
                    interests: interests ? interests : "null",
                    profileImage: rutaImagen,
                })
            }
            res.redirect("/");
        })

};

/* post '/view/register' */
exports.viewRegister = function (req, res) {
    res.redirect("/register");
}; 