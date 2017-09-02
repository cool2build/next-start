const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const _ = require('lodash');
const config = require('config')['sequelize'];

let db = {};
// TODO - per-environment config
const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'postgres'
});

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    console.log('file', file);
    return file.indexOf('.') !== 0 && file !== 'index.js';
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize.sync({ force: true });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.menu.belongsTo(db.store);
db.sold.belongsTo(db.menu);
db.sold.belongsTo(db.user);
db.sold.belongsToMany(db.topping, { through: 'sold_toppings' });
db.topping.belongsToMany(db.sold, { through: 'sold_toppings' });
db.menu.belongsToMany(db.image, { through: 'menu_images' });
db.image.belongsToMany(db.menu, { through: 'menu_images' });
db.topping.belongsToMany(db.image, { through: 'topping_images' });
db.image.belongsToMany(db.topping, { through: 'topping_images' });

module.exports = db;
