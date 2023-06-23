const{Sequelize} = require('sequelize');


//Instanciamos la BD
const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:'./database.sqlite',
});

//Método que inicializa la BD

const initializeDB = async() => {

    try {
        //verificar si la conexión fue exitosa
        await sequelize.authenticate();
        console.log("Conexión a la Base de Dato exitosa.")
        await sequelize.sync({force:false});

    } catch (err) {
        
        console.log('Hubo un error al inicializar la Base de Datos.',err)
    }

};

//exportamos 
module.exports = {sequelize, initializeDB};