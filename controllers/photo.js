const { Comment, Label, Photo, Photorating, User } = require("../models");
const uuid = require("uuid");
const Sequelize = require('sequelize');
const Jimp = require('jimp');
const Op = Sequelize.Op;
const fs = require("fs");

/* post /buscar */
exports.buscarPhotos = async function (req, res) {
    const frase = req.body.buscar;
    const users = await User.findAll();
    const labels = await Label.findAll({ include: Photo });

    let photos = await Photo.findAll({
        where: { title: { [Op.like]: frase } },
        offset: 0,
        limit: 40,
        include: User,
    });

    let photosWithoutDuplicates = [];

    photos = await Promise.all([photos, Label.findAll({
        where: { keyword: { [Op.like]: frase } },
        offset: 0,
        limit: 40,
    })
        .then(b => Promise.all(
            b.map(label => Photo.findAll(
                { where: { id: label.idPhoto }, include: User }
            ))
        ))
    ])
        .then(photos => {
            photosWithoutDuplicates = Array.from(new Set([...photos[0], ...photos[1]]));

        });

    res.render("home", { photos: photosWithoutDuplicates, labels: labels, users: users, req: req });
};



/* get /delete/:id */
exports.deletePhoto = async function (req, res, next) {
    const id = req.params.id;
    const photos = await Photo.findAll({ where: { id: id } }).then(response => {
        fs.unlink(`./public/images/${response[0].image}`, function (err) {
            if (err) {
                console.log("Hubo un error al intentar borrar el archivo: ", err);
            } else {
                console.log("El archivo se ha borrado correctamente");
            }
        });

        if (response[0].imageWatermark) {
            fs.unlink(`./public/imagesWatermark/${response[0].imageWatermark}`, function (err) {
                if (err) {
                    console.log("Hubo un error al intentar borrar el archivo: ", err);
                } else {
                    console.log("El archivo se ha borrado correctamente");
                }
            })
        }

        if (response[0].imageWatermarkFotaza) {
            fs.unlink(`./public/imagesWatermarkFotaza/${response[0].imageWatermarkFotaza}`, function (err) {
                if (err) {
                    console.log("Hubo un error al intentar borrar el archivo: ", err);
                } else {
                    console.log("El archivo se ha borrado correctamente");
                }
            })
        }
    })


    Comment.destroy({ where: { idPhoto: id } })
    Label.destroy({ where: { idPhoto: id } })
    Photorating.destroy({ where: { idPhoto: id } });
    Photo.destroy({ where: { id: id } })

    res.redirect("/user/profile");
}

/* get / */
exports.cargarDatos = async function (req, res, next) {
    const photos = await Photo.findAll({ include: User });
    const users = await User.findAll();
    const labels = await Label.findAll({ include: Photo });

    /* const photoRankings = await Photorating.findAll({where:{}}); */

    res.render("home", { photos: photos.reverse(), labels: labels, users: users, req: req })
}

exports.sortPhoto = async function (req, res, next) {
    let photos = await Photo.findAll({ include: User });
    const users = await User.findAll();
    const labels = await Label.findAll({ include: Photo });
    let manera = req.params.manera;


    switch (manera) {
        case 'fecha':
            photos.sort(function (a, b) {
                if (a.id > b.id) {
                    return 1;
                }
                if (a.id < b.id) {
                    return -1;
                }
                return 0;
            })
            break;
        case 'public':
            photos.splice(0, 0);
            photos = await Photo.findAll({ where: { privacy: 'Public' }, include: User });
            break;
        case 'protected':
            photos.splice(0, 0);
            photos = await Photo.findAll({ where: { privacy: 'Protected' }, include: User });
            break;
        case 'private':
            photos.splice(0, 0);
            photos = await Photo.findAll({ where: { privacy: 'Private' }, include: User });
            break;
    }



    res.render("home", { photos: photos, labels: labels, users: users, req: req })
}

/* get '/target-top/:id' */
exports.viewTarget = async function (req, res) {

    const id = req.params.id;
    const photos = await Photo.findAll({ where: { id: id } })

    res.render("target-view-top", { photos: photos })
};

/* get '/view/almacenar' */
exports.viewAlmacenarPhoto = function (req, res) {

    res.redirect("/almacenar");
};

/* post '/submitPhoto' */
exports.submitPhoto = async function (req, res) {
    let { title, privacy, category, label1, label2, label3, rightOfUse } = req.body;

    const { imagen, watermark } = req.files;
    let rutaImagenWatermark = '';
    let rutaImagenWatermarkFotaza = '';

    const users = await User.findAll({ where: { sessionId: req.sessionID } });

    /* PARA LAS IMAGENES SIN MARCA DE AGUA */
    const rutaImagen = uuid.v1() + imagen.name;
    imagen.mv('./public/images/' + rutaImagen);

    if (rightOfUse == "Copyright") {
        privacy = "private";

        const image1 = await Jimp.read(imagen.data);
        const image2 = await Jimp.read(watermark ? watermark.data : imagen.data);

        image2.circle(40);

        const anchoImagen3 = image1.bitmap.width;
        image2.resize(anchoImagen3, anchoImagen3);
        image2.opacity(0.5)
        image1.blit(image2, 0, 0)

        rutaImagenWatermark = uuid.v1() + imagen.name;
        image1.write('./public/imagesWatermark/' + rutaImagenWatermark);
    }

    if (privacy == "public" && rightOfUse != "Copyright") {
        const image3 = await Jimp.read(imagen.data);
        const image4 = await Jimp.read('public/imagesWatermarkFotaza/template.png');

        const anchoImagen3 = image3.bitmap.width;
        const altoImagen3 = image3.bitmap.height;
        image4.resize(anchoImagen3, altoImagen3);
        image3.blit(image4, 0, 0)

        rutaImagenWatermarkFotaza = uuid.v1() + imagen.name;
        image3.write('./public/imagesWatermarkFotaza/' + rutaImagenWatermarkFotaza);
    }


    const tiempoTranscurrido = Date.now();
    const fechaCreacion = new Date(tiempoTranscurrido);
    fechaCreacion.toLocaleDateString()

    Photo.create({
        privacy: privacy,
        idOwner: users[0].id,
        image: rutaImagen,
        imageWatermark: rutaImagenWatermark,
        imageWatermarkFotaza: rutaImagenWatermarkFotaza,
        title: title,
        category: category,
        creationDate: fechaCreacion,
        format: imagen.mimetype,
        resolution: imagen.size,
        rightOfUse: rightOfUse
    }).then(result => {

        if (label1 != "null") {
            Label.create({
                idPhoto: result.id,
                keyword: label1,
            })
        }

        if (label1 != "null") {
            Label.create({
                idPhoto: result.id,
                keyword: label2,
            })
        }

        if (label1 != "null") {
            Label.create({
                idPhoto: result.id,
                keyword: label3,
            })
        }

    }).catch(err => {
        console.log("Hubo un error al cargar la imagen :/")
    })

    res.redirect("/photo");
};

/* get /rating/:id/:numStar */
exports.ratingPhoto = async function (req, res) {
    const id = req.params.id;
    const numStar = req.params.numStar;

    const users = await User.findAll({ where: { sessionId: req.sessionID } });
    const photoratings = await Photorating.findAll({ where: { idPhoto: id, idUser: users[0].id } });
    const cantidadVotos = await Photorating.findAll({ where: { idPhoto: id } });
    let totalVotos = cantidadVotos.length + 1;

    let promedio = Math.floor(numStar);

    cantidadVotos.forEach(element => {
        promedio += Math.floor(element.starNumber);
    });

    console.log("aaaaaaaaaaa")
    console.log(typeof (promedio))
    console.log("aaaaaaaaaaa")

    if (photoratings.length == 0) {
        Photorating.create({
            idPhoto: id,
            idUser: users[0].id,
            starNumber: numStar,
        });

        Photo.update({ numberOfStars: promedio / totalVotos }, { where: { id: id } })
    }


    res.redirect("/photo");

}
