const {libraryService} = require('../services');


//(AUTH)
const createLibrary = async(req, res) => {
    try {
        const newLibrary = await libraryService.createLibrary(req.body);
        res.json(newLibrary);
    } catch (err) {
        res.status(500).json({
            action:'Create Library.',
            error: err.message,
        })
        
    } 
   
 };
 
 
 const getLibrariesAndAllBooks = async() => {
    try {
        const newLibrary = await libraryService.getLibrariesAndAllBooks();
        res.json(newLibrary);
    } catch (err) {
        res.status(500).json({
            action:'Obtener todas las librerias.',
            error: err.message,
        })
        
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