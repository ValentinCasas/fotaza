const { Comment, Label, Photo, Photorating, User, Message, MsgBuyPhoto } = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

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

/* /user/myOffers/:idUserEmiting */

exports.userEmittingOferta = async function (req, res) {

    const { idUserEmiting } = req.params;
    const users = await User.findAll({ where: { sessionId: req.sessionID } });
    const id = users[0].id;

    const messagesUser = await MsgBuyPhoto.findAll({ where: { idOwner: id }, include: User })
    const usersEmiting = await User.findAll({ where: { id: { [Sequelize.Op.in]: messagesUser.map(message => message.idUserEmitting) } } });


    const messages = await MsgBuyPhoto.findAll({ where: { idOwner: id, idUserEmitting: idUserEmiting }, include: [User, Photo] })

    res.render("myOffers", { messages: messages.reverse(), usersEmiting: usersEmiting })
}

/* get /view/myOffers */

exports.myOffers = async function (req, res) {

    const users = await User.findAll({ where: { sessionId: req.sessionID } });
    const id = users[0].id;

    const messages = await MsgBuyPhoto.findAll({ where: { idOwner: id }, include: [User, Photo] })

    const usersEmiting = await User.findAll({ where: { id: { [Sequelize.Op.in]: messages.map(message => message.idUserEmitting) } } });

    res.render("myOffers", { messages: messages ? [] : [], usersEmiting: usersEmiting })
}

/* /user/:userEmitting */

exports.userEmitting = async function (req, res) {
    const { idUserEmiting } = req.params;
    const users = await User.findAll({ where: { sessionId: req.sessionID } });
    const id = users[0].id;
    const messagesUser = await Message.findAll({ where: { idUserReceiver: id, idUserEmitting: idUserEmiting }, include: User })

    const messages = await Message.findAll({ where: { idUserReceiver: id }, include: User })
    const usersEmiting = await User.findAll({ where: { id: { [Sequelize.Op.in]: messages.map(message => message.idUserEmitting) } } });

    res.render("myMessages", { messages: messagesUser.reverse(), usersEmiting: usersEmiting })
}

/* get /view/myMessages */

exports.myMessages = async function (req, res) {
    const users = await User.findAll({ where: { sessionId: req.sessionID } });
    const id = users[0].id;

    const messages = await Message.findAll({ where: { idUserReceiver: id }, include: User })

    const usersEmiting = await User.findAll({ where: { id: { [Sequelize.Op.in]: messages.map(message => message.idUserEmitting) } } });

    res.render("myMessages", { messages: messages ? [] : [], usersEmiting: usersEmiting })
}