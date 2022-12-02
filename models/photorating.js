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
    starNumber: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Photorating',
    tableName: 'photorating',
    timestamps: false,
  });
  return Photorating;
};