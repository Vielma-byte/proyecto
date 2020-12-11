// import
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const mysql = require('mysql');
const indexRoutes = require('./routes/index');
// app
const app = express();
// static files
app.use(express.static(path.join(__dirname, './public'))); // deterina que la carpeta public es usada para los archivos estaticos
app.use(bodyParser.urlencoded({ extended: false })); // rechaza la entrada de datos por url
// settings
app.set('view engine', 'ejs'); // determina un motor de vista
app.set('views', path.join(__dirname, 'views')); // determina que views es la carpeta de las vistas html
app.engine('html', require('ejs').renderFile); // hace que los archivos con el motor de busqueda se tenga que guardar en html y no haya problema

// use
app.use(indexRoutes); // determina la carpeta para las rutas webs

// server
app.listen(4000, () => { // sirve para inicar nuestro servidos web en el puerto 4000
  // console.log('running on 4000');
});
