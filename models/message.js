'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {

    static associate(models) {
      Message.belongsTo(models.User,{foreignKey:'idUserEmitting'});
/*       Mensaje.belongsTo(models.User,{foreignKey:'idUserEmisor'}); */

    }
  }
  Message.init({
    description: DataTypes.STRING,
    idUserEmitting: DataTypes.INTEGER,
    idUserReceiver: DataTypes.INTEGER,
    message: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Message',
    tableName: 'message',
    timestamps: false,

  });
  return Message;
};