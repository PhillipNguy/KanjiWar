const models = require('./index');

export default (sequelize, DataType) => {
  const User = sequelize.define("user", {
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      required: true,
      unique: true,
      primaryKey: true,
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
    passowrd: {
      type: DataTypes.STRING,
      required: true,
    },
    score: {
      type: DataTypes.INTEGER,
      required: true
    },
  })

  User.hasMany(models.deck, {sourceKey: "id", foreignKey: "user_id", as:"deck"})
  models.deck.belongsTo(User, { foreignKey: "user_id"})

  User.hasMany(models.card, {sourceKey: "id", as:"card"})
  models.card.belongsTo(User, { foreignKey: "user_id"})

  return User;
};

