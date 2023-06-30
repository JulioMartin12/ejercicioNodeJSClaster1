const {Book} = require('../modules');
const {Op} = require('sequelize');

const createBook = async(book)=>{

    try {
        const newBook = await Book.create(book);
        return newBook;
    } catch (err) {
        console.error('Error when creating Book',err);
        throw err;
    }
  
};
const updateBook = async(bookId,body)=>{
    try {
        console.log(body)
        console.log(bookId)
        const bookUpdate = await Book.findByPk(bookId);
        if(bookUpdate){
            bookUpdate.update(body);

        }
                 console.log("book cambiado" + bookUpdate);
        return body;
    } catch (err) {
        console.error('Error when updeting Book',err);
        throw err;
        
    }


};



const deleteBook = async(bookId)=>{
    try {
         const bookDelet= await Book.findByPk(bookId);
         console.log(bookDelet);
        await Book.destroy( {
            where: { id :bookId}
        } );
        return bookDelet;
    } catch (err) {
        throw err;
    }
  
};


const findBookByPK = async(bookId)=>{
 try {
    const book = await Book.findByPk(bookId);
    return book;
 } catch(err) {
    console.error('Error en la busqueda')
    throw err;
 }
};

const getAllBook = async()=>{
    try {
        const books = await Book.findAll({
            attributes: [
                "id",
                "isbn",
                "title",
                "author",
                "year",
                "library"
            ]
        });
        console.log(books)
        return books;
    } catch(err) {
        console.error('Error en la busqueda de todos los libors.')
        throw err;
    }
};


module.exports = {createBook, updateBook, findBookByPK, getAllBook,deleteBook};