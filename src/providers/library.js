const {Library} = require('../modules');
const {Op} = require('sequelize');

//(AUTH)
const createLibrary = async(library) => {
   try {
    const newLibrery = Library.create(library);
    return newLibrery;
   } catch (err) {
    console.error('Error when creating library', err);
    throw err;
    
   }
};


const getLibrariesAndAllBooks = async() => {
    try {
        const libraries = Library.findAll();
        return libraries;
    } catch (err) {
        console.error('Error when found libreries', err);
        throw err;
        
    }
};

const getAllBooksByCriteria = () => {};

//(AUTH)
const updateLibrery = () => {};

//(AUTH)
const deletLibrery = () => {};

//(AUTH)
const addNewBook = () => {};

/* 

○ Crear librería (AUTH)
○ Obtener una librería
Debe traer también todos los libros
○ Obtener todas las librerías
Debe traer también todos los libros
○ Modificar una librería (AUTH)
○ Eliminar una librería (**) (AUTH)
○ Agregar un libro nuevo (*) (AUTH)

*/


module.exports = { createLibrary, getLibrariesAndAllBooks};