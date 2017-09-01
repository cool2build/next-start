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
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

module.exports = _.extend({
  sequelize: sequelize,
  Sequelize: Sequelize
}, db);
