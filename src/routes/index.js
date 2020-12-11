/* eslint-disable no-unused-vars */
const { render } = require('ejs');
const { response, request } = require('express');
const express = require('express');
// const mysql = require('mysql');
const dbConnection = require('../modules/dbconection');

// const { req, res } = require('express');
// const { info } = require('../modules/my-log');
const connection = dbConnection();
const router = express.Router();

// eslint-disable-next-line no-shadow
router.get('/', (request, response) => {
  response.render('index.html');
});

// eslint-disable-next-line no-shadow
router.get('/info', (request, response) => {
  response.render('info.html');
});

// eslint-disable-next-line no-shadow
router.get('/register', (request, response) => {
  response.render('register.html');
});

router.post('/regi', async (req, res) => {
  const {
    nombre, correo, contraseña,
  } = req.body;
  await connection.query('INSERT INTO usuario SET?', {
    nombre,
    correo,
    contraseña,
  // eslint-disable-next-line no-unused-vars
  }, (err, result) => {
    res.redirect('/');
  });
});

// eslint-disable-next-line no-shadow
router.get('/comentarios', (request, response) => {
  response.render('comentarios.html');
});

router.post('/comen', async (req, res) => {
  const {
    comentario,
  } = req.body;
  await connection.query('INSERT INTO comentarios SET?', {
    comentario,
  // eslint-disable-next-line no-unused-vars
  }, (err, result) => {
    res.redirect('/');
  });
});

// eslint-disable-next-line no-shadow
router.get('/pedido', (request, response) => {
  response.render('pedidos.html');
});

router.post('/pedi', async (req, res) => {
  const {
    pedido, direccion, telefono, nombre,
  } = req.body;
  await connection.query('INSERT INTO pedidos SET?', {
    pedido,
    direccion,
    telefono,
    nombre,
  // eslint-disable-next-line no-unused-vars
  }, (err, result) => {
    res.redirect('/');
  });
});

// eslint-disable-next-line no-shadow
router.get('/pedi', async (request, response) => {
  await connection.query('SELECT * FROM pedidos', (err, rows) => {
    if (err) {
      throw err;
    }
    response.render('pedido.html', { pedidos: rows });
  });
});

// eslint-disable-next-line no-shadow
router.get('/coment', async (request, response) => {
  await connection.query('SELECT * FROM comentarios', (err, rows) => {
    if (err) {
      throw err;
    }
    response.render('comentario.html', { comentario: rows });
  });
});
// eslint-disable-next-line no-shadow
router.get('*', (request, response) => {
  response.status(404).send('NOT FOUND');
});

module.exports = router;
