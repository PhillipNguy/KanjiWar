const fs = require('fs');
const path = require('path');
const Sequelize = require("sequelize");

const config = {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
  logging: false,
}

const sequelize = new Sequelize('kanjiwar', 'athena', '', config);
//const db = {}

// const files = fs.readdirSync(__dirname);

// for (const file of files) {
//   if (file !== 'index.js') {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   }
// }

const models = {
  User: require("./user") (sequelize, Sequelize.DataTypes),
  Deck: require("./deck") (sequelize, Sequelize.DataTypes),
  Card: require("./card") (sequelize, Sequelize.DataTypes),
}

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;