const {Library, Book} = require('../modules');
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
        const libraries = Library.findAll({include: {all:true}});
        return libraries;
    } catch (err) {
        console.error('Error when found libreries', err);
        throw err;
        
    }
};

const getAllBooksByCriteriaLibrary = async(libraryId) => {
    try {
        const libraryAllBooks = await Library.findByPk(libraryId,{ include: {all:true}});
        return libraryAllBooks;
    } catch (err) {
        console.error('Error when found librery', err);
        throw err;
    }
};

//(AUTH)
const updateLibrary = async(libraryId,body) => {

    try {
        console.log(body)
        console.log(libraryId)
        const libraryUpdate = await Library.findByPk(libraryId);
        if(libraryUpdate){
           libraryUpdate.update(body);

        }
                 console.log("Library cambiado" + libraryUpdate);
        return body;
    } catch (err) {
        console.error('Error when updeting Library',err);
        throw err;
        
    }
};

//(AUTH)
const deletLibrery = async(libraryId) => {
    try {
        const libreryDelete = await Library.findByPk(libraryId);
        console.log(libreryDelete);
        if(libreryDelete){
            await Library.destroy({
                where: { id :libraryId }
            });
            Book.update( { library: null}, {where: { library :libraryId }}
                         )
            return libreryDelete;
        }
       return false;
   } catch (err) {
    console.error('Error when deleting Library',err);
       throw err;
   }
  
};

//(AUTH)
const addNewBook = async(libraryId, book) => {
    try {console.log(libraryId)
        console.log({...book, "library":libraryId});
       const addBook = await Book.create({...book, "library":libraryId})   
       return addBook  
    } catch (err) {
        console.error('Error when adding Book',err);
        throw err;
        
    }
};

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


module.exports = { createLibrary, getLibrariesAndAllBooks, getAllBooksByCriteriaLibrary, updateLibrary, deletLibrery, addNewBook};