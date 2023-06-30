const {libraryProvider} = require('../providers');

//(AUTH)
const createLibrary = async(library) => {

  try {
    return await libraryProvider.createLibrary(library);
  } catch (err) {
    throw err;
    
  }
 
};


const getLibrariesAndAllBooks = async() => {
  try {
    return await libraryProvider.getLibrariesAndAllBooks();
  } catch (err) {
    throw err;
    
  }

    
};

const getAllBooksByCriteriaLibrary = async(libraryId) => {
  try {
     const libraryAllBooks = await libraryProvider.getAllBooksByCriteriaLibrary(libraryId);
     return libraryAllBooks;
  } catch (err) {
    
  }
};

//(AUTH)
const updateLibrary = async(libraryId,body) => {
  try {
    const libraryUpdate = await libraryProvider.updateLibrary(libraryId,body);
    return libraryUpdate;
 } catch (err) {
   
 }
};

//(AUTH)
const deletLibrery = async(libraryId) => {
  try {
    
     const libraryDelete = await libraryProvider.deletLibrery(libraryId);
     return libraryDelete ;
  } catch (err) {
    console.error('Error al eliminar la libreria');
    throw err;
  }
};

//(AUTH)
const addNewBook = async(libraryId,book) => {
  try {
         const addBook = await libraryProvider.addNewBook(libraryId,book);
         return addBook;
  } catch (err) {
    console.error('Error al agregar el libro a la libreria');
    throw err;
  }

};



module.exports = { createLibrary, getLibrariesAndAllBooks, getAllBooksByCriteriaLibrary, updateLibrary, deletLibrery, addNewBook};