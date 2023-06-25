const express = require('express');
const PORT = 8000;

//instanciamos la aplicacion
const app = express();
const {initializeDB} = require('./config/db-config');
const {libraryRouter, bookRouter } = require('./routes');

//utilizamos los Middleware
app.use(express.json());
app.use('/library',libraryRouter);
app.use('/book',bookRouter);
app.use('/:idBook',bookRouter);

app.listen(PORT, async()=>{
  await initializeDB();
  console.log(`Server runing in PORT:${PORT}`);
});