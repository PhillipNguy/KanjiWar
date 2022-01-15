const models = require('./index');

export default (sequelize, DataTypes) => {
  const Card = sequelize.define("card", {
    id: {
      type: DataTypes.NUMBER,
      unique: true,
      required: true,
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