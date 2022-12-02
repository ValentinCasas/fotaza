'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.Photo,{foreignKey:'idPhoto'});
      
      Comment.belongsTo(models.User,{foreignKey:'idUser'});
    }
  }
  Comment.init({
    description: DataTypes.STRING,
    shippingDate:DataTypes.DATE,
    idPhoto:DataTypes.INTEGER,
    idUser:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
    tableName: 'comment',
    timestamps: false,
  });
  return Comment;
};