const {libraryProvider, bookProvider} = require('../providers');

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
    return await libraryProvider.getLibrariesAndAllBooks(library);
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
const updateLibrery = () => {};

//(AUTH)
const deletLibrery = () => {};

//(AUTH)
const addNewBook = () => {};



module.exports = { createLibrary, getLibrariesAndAllBooks, getAllBooksByCriteriaLibrary, updateLibrery, deletLibrery};