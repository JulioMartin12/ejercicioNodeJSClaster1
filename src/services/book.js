const {bookProvider} = require('../providers');

//(AUTH)
const createBook = async(book)=>{
    try {
        const newBook = await bookProvider.createBook(book);
        if(!newBook)
           return newBook;
    } catch (err) {
        throw  err;
    }
   
};


//(AUTH)
const updateBook = async(idBook)=>{
    try {
        const newBook = await bookProvider.updateBook(idBook);
        if(!newBook)
           return newBook;
    } catch (err) {
        throw  err;
    }
   
};


//(AUTH)
const deleteBook = async()=>{};


const findBookByPK = async()=>{};


const getAllBook = async()=>{};


module.exports = {createBook, updateBook};