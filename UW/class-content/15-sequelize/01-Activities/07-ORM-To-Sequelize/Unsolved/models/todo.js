// sequelize (lowercase) references our connection to the DB.
var sequelize = require('../config/config.json');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('todo', {
    text: DataTypes.STRING,
    complete: DataTypes.STRING
  });
};
