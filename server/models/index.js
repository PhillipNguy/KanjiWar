const Sequelize = require("sequelize");

const config = {
  host: "localhost",
  dialect: "postgres",
  port: 54332,
}

const sequelize = new Sequelize('kanjiwar', 'postgres', 'postgres', config);

const models = {
  user: sequelize.import("./user"),
  deck: sequelize.import("./deck"),
  card: sequelize.import("./card"),
}

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;