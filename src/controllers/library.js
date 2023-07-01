const {libraryService} = require('../services');


//(AUTH)
const createLibrary = async(req, res) => {
    try {
        const newLibrary = await libraryService.createLibrary(req.body);
        res.json(newLibrary);
    } catch (err) {
        res.status(400).json({
            action:'Create Library.',
            error: err.message,
        })
        
    } 
   
 };
 
 
 const getLibrariesAndAllBooks = async(req,res) => {
    try {
        const newLibrary = await libraryService.getLibrariesAndAllBooks();
        res.json(newLibrary);
    } catch (err) {
        res.status(400).json({
            action:'Obtener todas las librerias.',
            error: err.message,
        })
        
    } 
 };
 
 const getAllBooksByCriteriaLibrary = async(req,res) => {
    try {
        const libraryAllBooks = await libraryService.getAllBooksByCriteriaLibrary(req.params.libraryId);
        res.json(libraryAllBooks);
    } catch (er) {
        res.status(400).json({
            action:'Obtener libraria y sus libros.',
            error: err.message,
        })
        
    }

 };
 
 //(AUTH)
 const updateLibrary = async(req,res) => {
    try { const libraryUpdate = await libraryService.updateLibrary(req.params.libraryId,req.body);
        res.json(libraryUpdate);
    } catch (er) {
        res.status(400).json({
            action:'Actualizar Biblioteca.',
            error: err.message,
        })
    }
 };
 
 //(AUTH)
 const deletLibrery = async(req, res) => {
    try {
        const libraryDelete = await libraryService.deletLibrery(req.params.libraryId);
        res.json(libraryDelete);
    } catch (err) {
        res.status(400).json({
            action:'Borrar una libraria y sus libros.',
            error: err.message,
        })
        
    }
 };
 
 //(AUTH)
 const addNewBook = async(req, res) => {
    try {
         const addBook = await libraryService.addNewBook(req.params.libraryId, req.body);
         res.json(addBook); 
    } catch (err) {
        res.status(400).json({
            action:'Agregar un libro a la libreria.',
            error: err.message,
        })
        
    }
 };
 
 
 
 module.exports = { createLibrary, getLibrariesAndAllBooks, getAllBooksByCriteriaLibrary, updateLibrary, deletLibrery,addNewBook};