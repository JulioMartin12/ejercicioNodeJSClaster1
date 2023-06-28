const {userProvider} = require('../providers');


const createUser = async(user)=>{

    try {
        const newUser = await userProvider.createUser(user);
        return newUser;
    } catch (err) {
        console.error('Error when creating User',err);
        throw err;
    }
  
};
const updateUser = async(userId,body)=>{
    try {
        console.log(body)
        console.log(userId)
        const userUpdate = await userProvider.updateUser(userId,body);
         return  userUpdate;
    } catch (err) {
        console.error('Error when updeting user',err);
        throw err;
        
    }


};



const deleteUser = async(userId)=>{
    try {
         const userDelet= await userProvider.deleteUser(userId);
         console.log(userDelet);
         return userDelet;
    } catch (err) {
        throw err;
    }
  
};


const findUserByPK = async(userId)=>{
 try {
    const user = await userProvider.findUserByPK(userId);
    return user;
 } catch (err) {
    console.error('Error en la busqueda')
    throw err;
 }
};

const getAllUser = async()=>{
    try {
       const users = await userProvider.getAllUser();
       return users;
    } catch (err) {
       console.error('Error en la busqueda')
       throw err;
    }
   };



module.exports = {createUser, updateUser, findUserByPK,deleteUser, getAllUser};