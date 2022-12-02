const { Comment, Label, Photo, Photorating, User } = require("../models");

/* get /view */
exports.viewProfile = async function (req, res) {

    const users = await User.findAll({ where: { sessionId: req.sessionID } });
    const photos = await Photo.findAll({ where: { idOwner: users[0].id }, include: User });
    const labels = await Label.findAll({ include: Photo });

    res.render("profile", { users: users, photos: photos.reverse(), labels: labels })
}