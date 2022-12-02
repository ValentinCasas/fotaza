'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Label extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Label.belongsTo(models.Photo,{foreignKey:'idPhoto'});

    }
  }
  Label.init({
    idPhoto: DataTypes.INTEGER,
    keyword:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Label',
    tableName: 'label',
    timestamps: false,
  });
  return Label;
};