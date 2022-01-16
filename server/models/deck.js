import { Sequelize } from './index';

const models = require('./index');

export default (sequelize, DataTypes) => {
  const Deck = sequelize.define("deck", {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      required: true
    },
    name: {
      type:DataTypes.STRING,
      required: true,
    },
    size: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
  });

  Deck.hasMany(models.card, {sourceKey: "id", foreignKey: "deck_id", as:"card"})
  models.card.belongTo(Deck, {foreignKey: "deck_id"})

  return Deck;
};


//get all user card
//filter kanji list.