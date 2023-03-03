const { Router } = require("express");
const { Err404 } = require('../middleware');

const {  Login, Category, Product,ExportarCsv } = require('../service')


const router = Router();

const routerApi = Router();

routerApi.use('/user', Login)
routerApi.use('/catalogo/categoria', Category)
routerApi.use('/catalogo/producto', Product)
routerApi.use('/exportar',ExportarCsv)
router.use('/api/', routerApi)

router.use(Err404)


module.exports = router; 