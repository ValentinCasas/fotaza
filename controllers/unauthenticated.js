const { Comment, Label, Photo, Photorating, User } = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/* get '/fotaza' */
exports.viewFotaza = async function (req, res) {
    const photos = await Photo.findAll();
    const labels = await Label.findAll({ include: Photo });
    const users = await User.findAll();
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

    const PhotosAccordingToYear = await Photo.findAll({
        where: {
            creationDate: {
                [Op.gt]: oneYearAgo
            },
            privacy: "public"
        },
        include: User
    });

    // Agrupar las fotos por usuario
    const photosByUser = PhotosAccordingToYear.reduce((acc, photo) => {
        const userId = photo.User.id;
        if (!acc[userId]) {
            acc[userId] = [];
        }
        acc[userId].push(photo);
        return acc;
    }, {});

    // Seleccionar una foto aleatoria por cada usuario
    const randomPhotos = Object.values(photosByUser).map((photos) => {
        const randomIndex = Math.floor(Math.random() * photos.length);
        return photos[randomIndex];
    });

    const photosRating = photos.filter(photo => {
        return photo.numberOfStars > 4  &&  photo.privacy == "public";
    });


    res.render("home", { photos: randomPhotos.reverse(), labels: labels, users: users, req: req, photosRating: photosRating })
};

