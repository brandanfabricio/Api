const {Router} = require('express');

const {Exportar} = require('./csv.controller');

const router = Router();


router.get('/:id',Exportar);

module.exports = router