// import { Sequelize } from './index';
const Sequelize = require('sequelize');
//const { user } = require('../controllers');
const models = require('./index');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      required: true,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      required: true,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      required: true,
    },
    score: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  })

  User.associate = (models) => {
    models.User.hasMany(models.Deck, {sourceKey: "id", foreignKey: "user_id", as:"deck"})
    models.Deck.belongsTo(User, { foreignKey: "user_id"})

    models.User.hasMany(models.Card, {sourceKey: "id", foreignKey: 'user_id', as:"card"})
    models.Card.belongsTo(User, { foreignKey: "user_id"})
  }


  return User;
};

