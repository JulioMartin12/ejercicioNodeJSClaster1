# ejercicioNodeJSClaster1
Después de terminar las clases de nodeJS , nos propusieron un proyecto como desafío, en el cual
tendrémos que aplicar lo aprendido. El proyecto en cuestion se trata de crear una API rest sobre
la cual permitiremos a ciertos usuarios según sus permisos , hacer crud de Bibliotecas y de libros.

Realice fue instalar las librerías que se utilizaran en el proyecto entre las cuales están:
-nodemon
-express
-sequelize
-sqlite3
-passport
-passport-jwt
-jsonwebtoken

Aplique la estructura de capas aprendida en clase en las cuales intervienen las siguientes capas

-Modules : es la capa donde tendremos los modelos que se representaran en la BD.

-Providers :  es la capa en la cual realizaremos la conexión con los servicios externos que      utilizaremos.

-Services: es la capa la cual tiene la lógica de negocio.

-controllers : el la capa  la cual es quien solicita y conoce a quien pedir los recursos que necesita, en una palabra es como el intermediario.

-routes: es la capa que conoce la ruta de cada recurso que vamos a necesitar, ayuda a la escabilidad y mantenimiento del proyecto

-middleware: son las funciones y servicios comunes que vamos a utilizar en el proyecto.

-config:es la capa de configuración en este proyecto tenemos la configuración de la BD y de la creación de usuario admin.

En cada una de la capa esta estructurada para que se pueda manejar através de índices para su mejor mantenimiento.

Esta Appi nos permite crear libros, bibiliotecas , usuarios y controlar que solo usuarios logueados tengan ciertas acciones sobre la appi y que un administrador tenga acceso a secciones criticas de la appi como el delete, updeta y create de los registros de las tablas de la BD.

