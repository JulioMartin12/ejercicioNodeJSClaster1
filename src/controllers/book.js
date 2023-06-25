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
        const newBook = await bookService.updateBook(req.body);
        res.json(newBook);
    } catch (err) {
        res.status(400).json({
            action:'updateBook',
            error: err.message
        });
        
    }
};


//(AUTH)
const deleteBook = async(req,res)=>{};


const findBookByPK = async(req,res)=>{};


const getAllBook = async(req,res)=>{};


module.exports = {createBook, updateBook};
