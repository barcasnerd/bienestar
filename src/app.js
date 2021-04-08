const express = require('express');
path = require('path');
morgan = require('morgan');
mariadb = require('mysql');
poolConection = require('express-myconnection');

const app = express();

// manejo de las rutas
const rutaMenu = require('./routes/menu');
const rutaHijo = require('./routes/hijo');
const rutaPadre = require('./routes/padre');
const rutaConsulta1 = require('./routes/consulta1');


// configuraciones de puerto
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(poolConection(mariadb, {
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 3306,
  database: 'bienestar'
}, 'single'));
app.use(express.urlencoded({ extended: false }));

// rutas de entrada
app.use('/', rutaMenu);
app.use('/hijo', rutaHijo);
app.use('/padre', rutaPadre);
app.use('/consulta1', rutaConsulta1);



// indicando los archivos publicos del lado del cliente
app.use(express.static(path.join(__dirname, 'public')));

// inicializando el servidor
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
