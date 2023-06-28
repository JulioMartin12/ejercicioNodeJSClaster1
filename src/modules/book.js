
const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/db-config');

const Book = sequelize.define('Books', {
   id:{type:DataTypes.INTEGER,
     primaryKey:true,
     autoIncrement:true,
},
   isbn:{
    type:DataTypes.INTEGER,
    allowNull:false,
    unique:true,
   },

   title:{
    type:DataTypes.STRING,
    allowNull:false,
   },

   author:{
    type:DataTypes.STRING,
    allowNull:false,
   },

   year:{
    type:DataTypes.STRING,
    allowNull:false,
   },

   library:{
    type:DataTypes.INTEGER,
    allowNull:false,
    foreignKey:true,
   },

},
{paranoid: true});// borrado loógico.

module.exports = Book;