'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (Sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    User_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    firstName: {
      type: Datatypes.STRING,
      allowNull: false
    },
    othernames: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    is_email_verified: {
      type: DataTypes.STRING
    },
    phone: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    is_phone_verified: {
      allowNull: false,
      type: DataTypes.STRING
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull:false
    },
    password_salt: {
      type: DataTypes.STRING,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};