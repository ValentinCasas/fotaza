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