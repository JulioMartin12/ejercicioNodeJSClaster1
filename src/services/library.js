const {libraryProvider} = require('../providers');

//(AUTH)
const createLibrary = async(library) => {
  return await libraryProvider.createLibrary(library);
};


const getLibrariesAndAllBooks = async() => {
    
};

const getAllBooksByCriteria = () => {};

//(AUTH)
const updateLibrery = () => {};

//(AUTH)
const deletLibrery = () => {};

//(AUTH)
const addNewBook = () => {};



module.exports = { createLibrary, getLibrariesAndAllBooks};