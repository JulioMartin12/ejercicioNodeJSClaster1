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
const updateBook = async(idBook)=>{
    try {
        const bookUpdated = await Book.update(idBook);
        return bookUpdated;
    } catch (err) {
        console.error('Error when updeting Book',err);
        throw err;
        
    }


};



const deleteBook = async()=>{};
const findBookByPK = async()=>{};
const getAllBook = async()=>{};


module.exports = {createBook, updateBook};