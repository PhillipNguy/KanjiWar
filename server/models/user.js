import { Sequelize } from './index';

const models = require('./index');

export default (sequelize, DataType) => {
  const User = sequelize.define("user", {
    id: {
      type: DataType.UUID,
      defaultValue: Sequelize.UUID,
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

  User.hasMany(models.deck, {sourceKey: "id", foreignKey: "user_id", as:"deck"})
  models.deck.belongsTo(User, { foreignKey: "user_id"})

  User.hasMany(models.card, {sourceKey: "id", foreignKey: 'user_id', as:"card"})
  models.card.belongsTo(User, { foreignKey: "user_id"})

  return User;
};

