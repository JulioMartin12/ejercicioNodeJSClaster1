const {userService} = require('../services');



const createUser = async(req,res)=>{

    try {
     
        const newUser = await userService.createUser(req.body);
        res.json(newUser);
    } catch (err) {
        res.status(400).json({
            action:'Create user.',
            error: err.message,
        })
    }
  
};
const updateUser = async(req,res)=>{
    try {
       const userUpdate = await userService.updateUser(req.params.userId, req.body);
       res.json(userUpdate);
    } catch (err) {
        console.error('Error when updeting user',err);
        throw err;
        
    }


};



const deleteUser = async(req, res)=>{
    try {
         const userDelet= await userService.deleteUser(req.params.userId);
         console.log(userDelet);
         res.json(userDelet)
    } catch (err) {
        res.status(500).json({
            action:'Obtener todas los usuarios.',
            error: err.message,
        })
    }
  
};


const findUserByPK = async(req, res)=>{
    try {
        const users = await userService.findUserByPK(req.params.userId);
        res.json(users);
     } catch (err) {
         res.status(500).json({
             action:'Obtener todas los usuarios.',
             error: err.message,
         })
     }
};

const getAllUser = async(req,res)=>{
    try {
       const users = await userService.getAllUser();
       res.json(users);
    } catch (err) {
        res.status(500).json({
            action:'Obtener todas los usuarios.',
            error: err.message,
        })
    }
   };




module.exports = {createUser, updateUser, findUserByPK,deleteUser, getAllUser};