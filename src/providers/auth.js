const jwt = require('jsonwebtoken'); 
const {authMdw} = require('../middleware');
const {userService} = require('../services')

const logingUser = async(datos) => {
    const { user, pass} = datos;
     if(user ==='admin' &&  pass === 'admin'){
     const token = jwt.sign({ user, role: 'admin'},authMdw.SERVER_SECRET);
    return token;
    }else{
      const userFound= await userService.validerUser(user, pass);
      if(userFound){ 
          const token = jwt.sign({ user, role: 'user'}, authMdw.SERVER_SECRET);
          return token;
      }
      console.error('Invalid User')
      throw err;
     } 
  };

module.exports = {logingUser};