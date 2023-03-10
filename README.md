todavia no terminado 

Tengo estos modelos:
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Photo.belongsTo(models.User, { foreignKey: 'idOwner' });
      Photo.hasMany(models.Label, { foreignKey: 'id' });
      Photo.hasMany(models.Photorating, { foreignKey: 'id' });
      Photo.hasMany(models.Comment, { foreignKey: 'id' });
      Photo.hasMany(models.MsgBuyPhoto, { foreignKey: 'id' });
    }
  }
  Photo.init({
    privacy: DataTypes.STRING,
    idOwner: DataTypes.INTEGER,
    image: DataTypes.STRING,
    imageWatermark: DataTypes.STRING,
    imageWatermarkFotaza: DataTypes.STRING,
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    creationDate: DataTypes.DATE,
    format: DataTypes.STRING,
    resolution: DataTypes.INTEGER,
    rightOfUse: DataTypes.STRING,
    numberOfStars: DataTypes.FLOAT,

  }, {
    sequelize,
    modelName: 'Photo',
    tableName: 'photo',
    timestamps: false,
  });
  return Photo;
};


'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photorating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Photorating.belongsTo(models.Photo,{foreignKey:'idPhoto'});
      Photorating.belongsTo(models.User,{foreignKey:'idUser'});

    }
  }
  Photorating.init({
    idPhoto: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER,
    starNumber: DataTypes.INTEGER,
    creationDate: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Photorating',
    tableName: 'photorating',
    timestamps: false,
  });
  return Photorating;
};

tengo este archivo pug:
#top-photos
            each photo in photosRating
                #top-img
                    a#top-target(href=`/photo/target-top/${photo.id}`)
                        img(src=`/${photo.image}`) 

y tengo este archivo js:
exports.cargarDatos = async function (req, res, next) {
// array donde van a ir los id de los Photorating que cumplan estos requisitos:
    let array = []; //va a ser un set pera que no haya repetidos

    /*aca voy a conseguir los photorating que cumplan con esto:
    Las photos que tengan más de 2 valoraciones en la primera semana de publicación */
    let photoRating = await Photorating.findAll({ include: Photo }); //se van a agregar los id en array

    /*aca voy a conseguir todas las Photos que tengan como id un numero que se encuentre dentro de array y ademas
    tenga como valor en numberOfStars un numero mayor a 4 */
    let fotosDestacadas = await Photo.findAll();


    res.render("home", { photosRating: fotosDestacadas })
}

como te daras cuenta tengo la logica escrita en comentarios pero no se como implementarla, por favor despues de leer estos datos importantes, necesito que me propicies el codigo.

-no usar la libreria moment.
-creationDate en Photorating es la fecha en la que se le dio una valoracion.
-creationDate en Photo es la fecha en la que se publico por primera vez.
-numberOfStars es el promedio de todas las valoraciones que tuvo esa foto.
-no necesito que las Photos sean de hace una semana, lo que necesito es que tomes el creationDate de la Photo y le restes el creationDate de Photorating, entonces si eso muestra que fue en la primer semana de publicacion de la Photo, se suma al contador,  entonces si el contador de esos photorating da mas de 2 se guarda en array, sino no