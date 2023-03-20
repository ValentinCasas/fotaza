const { Comment, Label, Photo, Photorating, User } = require("../models");

/* get '/view/:id' */
exports.viewComment = async function (req, res) {
    const { id } = req.params;
    const photo = await Photo.findAll({ where: { id: id } });
    const comments = await Comment.findAll({ where: { idPhoto: id }, include: [{ model: User }] });
    res.render("messages-section", { photo: photo, comments: comments.reverse(), req: req, idPhoto: id });
};

/* /delete/:id */
exports.deleteComment = async function (req, res) {
    const { idComment, idPhoto } = req.params;
    await Comment.destroy({ where: { id: idComment } });

    const photo = await Photo.findAll({ where: { id: idPhoto } });
    const comments = await Comment.findAll({ where: { idPhoto: idPhoto }, include: [{ model: User }] });
    res.render("messages-section", { photo: photo, comments: comments.reverse(), req: req, idPhoto: idPhoto });
}

/* post '/sendComment' */
exports.sendComment = async function (req, res) {

    const { id, msg } = req.body;
    const users = await User.findAll({ where: { sessionId: req.sessionID } });

    const tiempoTranscurrido = Date.now();
    const fechaCreacion = new Date(tiempoTranscurrido);
    fechaCreacion.toLocaleDateString()

    //agregar id del User que lo envio
    await Comment.create({
        description: msg,
        shippingDate: fechaCreacion,
        idPhoto: id,
        idUser: users[0].id,
    })

    const photo = await Photo.findAll({ where: { id: id } });
    const comments = await Comment.findAll({ where: { idPhoto: id }, include: [{ model: User }] });

    // Redirigir con JavaScript después de que se haya renderizado la página
    res.render("messages-section", { photo: photo, comments: comments.reverse(), req: req, idPhoto: id });

};