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
  role:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:'admin',
  },
 email:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:{    
      args: true,    
      msg: 'Correo ya está registrado en la base de datos',
     },
    validate: {
       isEmail: {
        args: true,
        msg: "Por favor, proporciona una dirección de correo electrónico válida",
      },
      },
  },
  password:{
    type: DataTypes.STRING,
    allowNull:false,
},
});

module.exports = User