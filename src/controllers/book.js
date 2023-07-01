const {bookService} = require('../services');

//(AUTH)
const createBook = async(req,res)=>{
    try {
        const newBook = await bookService.createBook(req.body);
        res.json(newBook);
    } catch (err) {
        res.status(400).json({
            action:'createBook',
            error: err.message
        });
        
    }

    
};


//(AUTH)
const updateBook = async(req,res)=>{

    try {
        const newBook = await bookService.updateBook(req.params.bookId,req.body);
        res.json(newBook);
    } catch (err) {
        res.status(400).json({
            action:'updateBook',
            error: err.message
        });
        
    }
};


//(AUTH)
const deleteBook = async(req,res)=>{
    try {
        const bookDelete = await bookService.deleteBook(req.params.bookId);
        res.json(bookDelete);
    } catch (err) {
        res.status(400);
    }
};


const findBookByPK = async(req,res)=>{
    try {
        const book = await bookService.findBookByPK(req.params.bookId)
        res.json(book)
    } catch (err) {
        res.status(400)
    }
};


const getAllBook = async(req,res)=>{
    try {
        const books = await bookService.getAllBook();
      res.json(books)
    } catch (err) {
       res.status(400)
    }
};


module.exports = {createBook, updateBook, findBookByPK, getAllBook, deleteBook};

