const {User} = require('../modules');
const {Op} = require('sequelize');


const createUser = async(user)=>{

    try {
        const newUser = await User.create(user);
        return newUser;
    } catch (err) {
        console.error('Error when creating User',err);
        throw err;
    }
  
};
const updateUser = async(userId,body)=>{
    try {
         const userUpdate = await User.findByPk(userId);
        if(userUpdate){
          return await userUpdate.update(body);
        }                
        return false;

    } catch (err) {
        console.error('Error when updeting user',err);
        throw err;
        
    }


};



const deleteUser = async(userId)=>{
    try {
         const userDelet= await User.findByPk(userId);
          await User.destroy({
            where: { id :userId}
        });
        return userDelet;
    } catch (err) {
        console.error('Error when delete User',err);
        throw err;
    }
  
};


const findUserByPK = async(userId)=>{
 try {
    const user = await User.findByPk(userId);
    return user;
 } catch (err) {
    console.error('Error Searching User.')
    throw err;
 }
};

const validateUser = async(options)=>{
    try {
       const userFound = await User.findAll(
        {where: {
               [Op.and]: [{email: options.user},{ password: options.pass}],
        },

        });
        if(userFound.length!== 0){

            return userFound
        }
       return false;
    } catch (err) {
       console.error('Error when validating User', err)
      return false;
    }
   };

const getAllUser = async()=>{
    try {
       const users = await User.findAll();
       return users;
    } catch (err) {
       console.error('Error Searching All Users')
       throw err;
    }
   };



module.exports = {createUser, updateUser, findUserByPK, deleteUser, getAllUser, validateUser};