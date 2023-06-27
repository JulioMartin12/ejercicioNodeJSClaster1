const {bookProvider} = require('../providers');

//(AUTH)
const createBook = async(book)=>{
    try {
        const newBook = await bookProvider.createBook(book);
       
           return newBook;
    } catch (err) {
        throw  err;
    }
   
};


//(AUTH)
const updateBook = async(idBook,body)=>{
    try {
        const newBook = await bookProvider.updateBook(idBook,body);
       
           return newBook;
    } catch (err) {
        throw  err;
    }
   
};


//(AUTH)
const deleteBook = async(bookId)=>{
try {
    const bookDelete  = await bookProvider.deleteBook(bookId);
    return bookDelete;
} catch (err) {
    throw err
}

};


const findBookByPK = async(bookId)=>{
    try {
        const book = await bookProvider.findBookByPK(bookId);
        return book;
    } catch (err) {
        console.error("error found")
        throw err
    }
};


const getAllBook = async()=>{
    try {
        const books = await bookProvider.getAllBook();
        return books;
    } catch (err) {
        console.error('Error en la busqueda de todos los libors.')
        throw err;
    }
};


module.exports = {createBook, updateBook, findBookByPK, getAllBook , deleteBook};