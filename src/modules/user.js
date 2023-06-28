const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/db-config');

const User = sequelize.define('Users',{
  id: {
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement: true,
  },
  user:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  rol:{
    type:DataTypes.STRING,
    allowNull:false,
  },
 email:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true,
  },
  password:{
    type: DataTypes.STRING,
    allowNull:false,
},
});

module.exports = User