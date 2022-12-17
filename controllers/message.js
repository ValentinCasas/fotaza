const { Comment, Label, Photo, Photorating, User, Message, MsgBuyPhoto } = require("../models");

/* get /buy/:idPhoto/:idOwner */

exports.buyPhoto = async function (req, res) {
    const { idPhoto, idOwner } = req.params;
    const mensaje = req.query.mensaje;

    const user = await User.findAll({ where: { sessionID: req.sessionID } })

    MsgBuyPhoto.create({
        idPhoto: idPhoto,
        idOwner: idOwner,
        idUserEmitting: user[0].id,
        description: mensaje,
    })

    res.redirect("/photo");
}

/* post /share */
exports.sendMessage = async function (req, res, next) {
    const users = await User.findAll({ where: { sessionId: req.sessionID } });
    const { idPhoto, idReceptor, msg } = req.body;
    const idEmisor = users[0].id;

    const photo = await Photo.findAll({ where: { id: idPhoto } })

    Message.create({
        description: photo[0].image,
        idUserEmitting: idEmisor,
        idUserReceiver: idReceptor,
        message: msg
    })

    res.redirect("/photo");
}

/* get /view/myOffers */

exports.myOffers = async function (req, res) {
    const users = await User.findAll({ where: { sessionId: req.sessionID } });
    const id = users[0].id;

    const messages = await MsgBuyPhoto.findAll({ where: { idOwner: id }, include: [User, Photo] })

    res.render("myOffers", { messages: messages.reverse() })
}

/* get /view/myMessages */

exports.myMessages = async function (req, res) {
    const users = await User.findAll({ where: { sessionId: req.sessionID } });
    const id = users[0].id;

    const messages = await Message.findAll({ where: { idUserReceiver: id }, include: User })

    res.render("myMessages", { messages: messages })
}