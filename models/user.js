'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Photo, { foreignKey: 'id' });
      User.hasMany(models.Photorating, { foreignKey: 'id' });

      User.hasMany(models.Comment, { foreignKey: 'id' });
      User.hasMany(models.Message, { foreignKey: 'id' });

    }
  }
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    interests: DataTypes.STRING,
    profileImage: DataTypes.STRING,
    sessionId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'user',
    timestamps: false,
  });
  return User;
};