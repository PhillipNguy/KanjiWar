// import { Sequelize } from './index';
const Sequelize = require("sequelize");
const models = require("./index");

module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define("Deck", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.UUID,
      required: true,
    },
    name: {
      type: DataTypes.STRING,
      required: true,
    },
    size: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });

  Deck.associate = (models) => {
    models.Deck.hasMany(models.Card, {
      sourceKey: "id",
      foreignKey: "deck_id",
      as: "card",
    });
    models.Card.belongsTo(Deck, { foreignKey: "deck_id" });
  };

  return Deck;
};

//get all user card
//filter kanji list.
