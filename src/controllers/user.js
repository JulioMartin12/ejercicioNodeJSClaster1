const {userService} = require('../services');



const createUser = async(req,res)=>{

    try {
         
        const newUser = await userService.createUser(req.body);
        if(newUser){
            res.json(newUser);
        }else{

            res.status(400).json({message:'Error when creating User.'});
        }
    } catch(err) {
        res.status(400).json({
            action:'Create user.' ,
            error: err.message
        })
    }
  
};
const updateUser = async(req,res)=>{
    try {
       const userUpdate = await userService.updateUser(req.params.userId, req.body);
       if(userUpdate){
           res.json(userUpdate);
       }else{

           res.status(404).json({
                     action:'Update User.' ,
                     error: 'User Not Found'
            })
       }
    
    } catch(err) {
        res.status(400).json({
            action:'Update User.' ,
            error: err.message 
        })     
        
    }
};


const deleteUser = async(req, res)=>{
    try {
         const userDelet= await userService.deleteUser(req.params.userId);
        if(userDelet){
            res.json(userDelet);
        }else{

            res.status(404).json({
                      action:'Delete User.' ,
                      error: 'User Not Found'
             })
        }
    } catch(err) {
        res.status(400).json({
            action:'Delete User.' ,
            error: err.message 
        })
    }
  
};


const findUserByPK = async(req, res)=>{
    try {
        const user = await userService.findUserByPK(req.params.userId);
        console.log(user)
        if(user){
            res.json(user);
           }
           else{
               res.status(404).json({
                action:'Find User by PK.',
                error: `Not Find User by PK ${req.params.userId}.`
            })

           }
     } catch(err) {
         res.status(400).json({
             action: 'Find User by PK',
             error: err.message
         })
     }
};

const getAllUser = async(req,res)=>{
    try {
       const users = await userService.getAllUser();
       if(users.length !== 0){
        res.json(users);
       } else{

           res.status(404).json({
            action:'Get All Users',
            error: 'Not found Users.'
        });
       }

       
    }catch(err){
        res.status(400).json({
            action:'Get All Users.',
            error: err.message
        });
    }
   };




module.exports = {createUser, updateUser, findUserByPK,deleteUser, getAllUser};