const { Comment, Label, Photo, Photorating, User } = require("../models");
const uuid = require("uuid");


/* get /delete/:id */
exports.deletePhoto = async function (req, res, next) {
    const id = req.params.id;

    Comment.destroy({ where: { idPhoto: id } })
    Label.destroy({ where: { idPhoto: id } })
    Photorating.destroy({ where: { idPhoto: id }});
    Photo.destroy({ where: { id: id } })

    res.redirect("/user/profile");
}


/* get / */
exports.cargarDatos = async function (req, res, next) {
    const photos = await Photo.findAll({ include: User });
    const users = await User.findAll();
    const labels = await Label.findAll({ include: Photo });

    /* const photoRankings = await Photorating.findAll({where:{}}); */

    res.render("home", { photos: photos.reverse(), labels: labels, users: users })
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



    res.render("home", { photos: photos, labels: labels, users: users })
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

    const { imagen } = req.files;
    const users = await User.findAll({ where: { sessionId: req.sessionID } });

    const rutaImagen = uuid.v1() + imagen.name;
    console.log(rutaImagen);
    imagen.mv("./public/images/" + rutaImagen);


    const tiempoTranscurrido = Date.now();
    const fechaCreacion = new Date(tiempoTranscurrido);
    fechaCreacion.toLocaleDateString()

    if (rightOfUse == "Copyright") {
        privacy = "private"
    }

    Photo.create({
        privacy: privacy,
        idOwner: users[0].id,
        image: rutaImagen,
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