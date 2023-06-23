const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/db-config'); 

const Library = sequelize.define('libraries', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement: true,
  },
  name : {
   type: DataTypes.STRING,
   allowNull:false,
  },
  location: {
   type: DataTypes.STRING,
   allowNull:false,
  },
  telefono: {
   type: DataTypes.STRING,
   allowNull:false,
  },
});

module.exports = Library;