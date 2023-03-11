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


    /* zona donde consigo photosRating */
    let array = new Set();
    let photoratings = await Photorating.findAll({ include: Photo });

    photos.forEach((photo) => {
        let counter = 0; // contador de valoraciones dentro de la primer semana
        // Iterar por cada Photorating correspondiente a esta Photo
        photoratings.forEach((photorating) => {
            if (photorating.idPhoto === photo.id) {

                // Obtener la fecha de creación de la Photo correspondiente a este Photorating
                const photoCreationDate = new Date(photo.creationDate);
                const photoratingCreationDate = new Date(photorating.creationDate);
                const differenceInTime = photoratingCreationDate.getTime() - photoCreationDate.getTime();
                const differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
                // Si la diferencia de días es menor o igual a 7, sumar al contador de valoraciones dentro de la primer semana
                if (differenceInDays <= 7) {
                    counter++;
                }
            }
        });
        // Si la Photo tiene al menos 3 valoraciones dentro de la primer semana y tiene un numberOfStars mayor a 4, agregarla al array
        if (counter >= 3 && photo.numberOfStars > 4) {
            array.add(photo.id);
        }
    });

    // Obtener todas las Photos que tienen un id en el array
    let destacadas = await Photo.findAll({
        where: {
            id: Array.from(array), // Convertir el set a un array
        },
    });

    res.render("home", { photos: randomPhotos.reverse(), labels: labels, users: users, req: req, photosRating: destacadas })
};

/* post '/buscar' */
exports.buscarPhotos = async function (req, res) {
    const frase = req.body.buscar;
    const users = await User.findAll();
    const labels = await Label.findAll({ include: Photo });

    // Obtener fotos cuyo título coincide con la frase
    const photosByTitle = await Photo.findAll({
        where: {
            title: { [Op.like]: '%' + frase + '%' },
            privacy: 'public'
        },
        offset: 0,
        limit: 40,
        include: User
    });

    const labelsByKeyword = await Label.findAll({
        where: {
            keyword: { [Op.like]: '%' + frase + '%' }
        },
        offset: 0,
        limit: 40,
    });

    // Obtener fotos cuyo id coincide con el id de la foto de una etiqueta que coincide con la frase
    const photosByLabel = await Photo.findAll({
        where: {
            id: { [Op.in]: labelsByKeyword.map(label => label.idPhoto) },
            privacy: 'public'
        },
        offset: 0,
        limit: 40,
        include: User
    });

    function removeDuplicates(arr) {
        const unique = new Set();
        // Recorrer el array y almacenar cada objeto en forma de cadena de texto
        // en el conjunto (Set)
        arr.forEach(obj => unique.add(JSON.stringify(obj)));
        // Devolver el array de objetos únicos
        return Array.from(unique).map(obj => JSON.parse(obj));
    }

    // Combinar resultados y eliminar duplicados
    let photoss = [...photosByTitle, ...photosByLabel];
    const photosWithoutDuplicates = removeDuplicates(photoss);

    /* zona donde consigo photosRating */
    let array = new Set();
    let photoratings = await Photorating.findAll({ include: Photo });
    let photos = await Photo.findAll();

    photos.forEach((photo) => {
        let counter = 0; // contador de valoraciones dentro de la primer semana
        // Iterar por cada Photorating correspondiente a esta Photo
        photoratings.forEach((photorating) => {
            if (photorating.idPhoto === photo.id) {

                // Obtener la fecha de creación de la Photo correspondiente a este Photorating
                const photoCreationDate = new Date(photo.creationDate);
                const photoratingCreationDate = new Date(photorating.creationDate);
                const differenceInTime = photoratingCreationDate.getTime() - photoCreationDate.getTime();
                const differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
                // Si la diferencia de días es menor o igual a 7, sumar al contador de valoraciones dentro de la primer semana
                if (differenceInDays <= 7) {
                    counter++;
                }
            }
        });
        // Si la Photo tiene al menos 3 valoraciones dentro de la primer semana y tiene un numberOfStars mayor a 4, agregarla al array
        if (counter >= 3 && photo.numberOfStars > 4) {
            array.add(photo.id);
        }
    });

    // Obtener todas las Photos que tienen un id en el array
    let destacadas = await Photo.findAll({
        where: {
            id: Array.from(array), // Convertir el set a un array
        },
    });


    res.render("home", { photos: photosWithoutDuplicates, labels: labels, users: users, req: req, photosRating: destacadas });
};