// import { Sequelize } from './index';
const Sequelize = require('sequelize')
const models = require('./index');

module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define("Card", {
    id: {
      //UUID sequelize
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowedNull: false,
    },
    kanji: {
      type: DataTypes.STRING,
      unique: true,
      required: true,
    },
    deck_id: {
      type: DataTypes.UUID,
      required: true,
    },
    user_id: {
      type: DataTypes.UUID,
      required: true,
    },
    meaning: {
      type: DataTypes.STRING,
    },
    kun_readings: {
      type: DataTypes.STRING,
    },
    on_reading: {
      type: DataTypes.STRING,
    },
  });

  return Card;
};