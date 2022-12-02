const { Comment, Label, Photo, Photorating, User } = require("../models");

/* get '/fotaza' */
exports.viewFotaza = async function (req, res) {
    const photos = await Photo.findAll({ where: { privacy: "public" }, include: User });
    const labels = await Label.findAll({ include: Photo });
    const users = await User.findAll();
    res.render("home", { photos: photos.reverse(), labels: labels, users: users })
};

