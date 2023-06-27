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
    return await libraryProvider.getLibrariesAndAllBooks(library);
  } catch (err) {
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



module.exports = { createLibrary, getLibrariesAndAllBooks};