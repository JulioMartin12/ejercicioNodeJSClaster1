const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/db-config'); 
const Book = require('./book');

const Library = sequelize.define('Libraries', {
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
   validate: {
    isNumeric:{
    args: true,
    msg: "Por favor,en el campo telefono, Ingrese un valor Numerico",
  }  
  }   
  },
},
{paranoid: true});

Library.hasMany(Book,{foreignKey:'library'}, { 
  onDelete: 'cascade',
  onUpdate: 'cascade',
  hooks: true, 
});
Book.belongsTo(Library);

module.exports = Library;