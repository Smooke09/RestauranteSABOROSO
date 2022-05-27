var conn = require('./../inc/db')
var express = require('express');
const { route } = require('express/lib/application');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  conn.query(`
    SELECT * FROM tb_menus ORDER BY title

  `, (err, results) => {

    if (err) {
      console.log(err)
    }
    res.render('index', {
      title: 'Restaurante Saboroso!',
      menus: results
    });
  })
});

// rota para pagina contato
router.get('/contacts', function (req, res, next) {
  res.render('contacts', {
    title: 'Contato - Restaurante Saboroso!',
  });
})

// rota para pagina menus
router.get('/menus', function (req, res, next) {
  res.render('menus', {
    title: 'Menu - Restaurante Saboroso!',
  });
})

// rota para pagina reservar
router.get('/reservations', function (req, res, next) {
  res.render('reservations', {
    title: 'Reservas - Restaurante Saboroso!',
  });
})

// rota para paginas servicoes
router.get('/services', function (req, res, next) {
  res.render('services', {
    title: 'Serviços - Restaurante Saboroso!',
  });
})

module.exports = router;
