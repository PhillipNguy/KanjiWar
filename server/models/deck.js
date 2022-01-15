const models = require('./index');

export default (sequelize, DataTypes) => {
  const Deck = sequelize.define("deck", {
    id: {
      type: DataTypes.NUMBER,
      unique: true
    },
    user_id: {
      type: DataTypes.NUMBER
    },
    name: {
      type:DataTypes.STRING
    },
    size: {
      type: DataTypes.NUMBER
    },
  });

  Deck.hasMany(models.card, {sourceKey: "id", foreignKey: "deck_id", as:"card"})
  models.card.belongTo(Deck, {foreignKey: "deck_id"})

  return Deck;
};

