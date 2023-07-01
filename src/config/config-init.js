const {User} = require('../modules')

/* En este metodo creamos un usuario admin, el cual es el encargado del manejo de las acciones critica sobre la Base de dato. La primera vez que se crean todas las tablas se creara un Usuario administrador de la misma.
*/
const createData = async () =>{
    try{
       
        const userFound = await User.findAll({
            where: {
              email: "admin@gmail.com",
            },
          });
      
          if (userFound.length > 0) return;
      
          await User.create({
            id: 0,
            user: "admin",
            role: "admin",
            email: "admin@gmail.com",
            password: "admin",
          });

         console.log("Data of the Administrator User correctly inserted in the database.");
    }catch(err){
        console.error("Error when inserting the User data:", err);
    }
}

module.exports = {createData}