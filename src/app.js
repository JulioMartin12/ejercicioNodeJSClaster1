const express = require('express');
const PORT = 8000;

//instanciamos la aplicacion
const app = express();
const {configutionBD, initConfiguration} = require('./config');
const {libraryRouter, bookRouter , userRouter, authRouter} = require('./routes');

//utilizamos los Middleware
app.use(express.json());
app.use('/library',libraryRouter);
app.use('/book',bookRouter);
app.use('/user',userRouter);
app.use('/login',authRouter);

app.listen(PORT, async()=>{
  await configutionBD.initializeDB();
  initConfiguration.createData();
  console.log(`Server runing in PORT:${PORT}`);
});