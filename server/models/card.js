import { Sequelize } from './index';

const models = require('./index');

export default (sequelize, DataTypes) => {
  const Card = sequelize.define("card", {
    id: {
      //UUID sequelize
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUID,
      primaryKey: true,
      allowedNull: false,
    },
    character: {
      type: DataTypes.STRING,
      unique: true,
      required: true,
    },
    deck_id: {
      type: DataTypes.NUMBER,
      required: true,
    },
    user_id: {
      type: DataTypes.NUMBER,
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