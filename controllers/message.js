const { Comment, Label, Photo, Photorating, User, Message } = require("../models");

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

/* get /view/myMessages */

exports.myMessages = async function (req, res) {
    const users = await User.findAll({ where: { sessionId: req.sessionID } });
    const id = users[0].id;

    const messages = await Message.findAll({ where: { idUserReceiver: id }, include: User })

    res.render("myMessages", { messages: messages })
}