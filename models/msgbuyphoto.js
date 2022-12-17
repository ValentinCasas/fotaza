'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MsgBuyPhoto extends Model {

    static associate(models) {
      MsgBuyPhoto.belongsTo(models.User,{foreignKey:'idUserEmitting'});
      MsgBuyPhoto.belongsTo(models.Photo,{foreignKey:'idPhoto'});
    }
  }
  MsgBuyPhoto.init({
    description: DataTypes.STRING,
    idOwner: DataTypes.INTEGER,
    idUserEmitting: DataTypes.INTEGER,
    idPhoto: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'MsgBuyPhoto',
    tableName: 'msgBuyPhoto',
    timestamps: false,
  });
  return MsgBuyPhoto;
};