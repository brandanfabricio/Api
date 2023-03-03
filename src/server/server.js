const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const swaggerUI = require('swagger-ui-express');
const swaggerjsDoc = require('swagger-jsdoc');
const path = require('path')
const SwaggerJson = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Api",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:4000"
            }
        ]

    },
    apis: [`${path.join(__dirname, "../service/Login/*.js")}`,`${path.join(__dirname, "../service/Categoria/*.js")}`,`${path.join(__dirname, "../service/Producto/*.js")}`]
}

console.log(SwaggerJson)
const { PORT } = require('../config')
const Router = require('../routes/index.routes');
const app = express();





const middleware = () => {
    app.use(morgan('dev'))
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }))
    app.use('/api/doc', swaggerUI.serve, swaggerUI.setup(swaggerjsDoc(SwaggerJson)))

}
const Rutas = () => {
    app.use(Router)
}

const start = () => {

    middleware();
    Rutas();
    app.listen(PORT, () => {
        console.log('Server vidor andando por el pueto ', PORT, ' 👌')
        console.log('Swagger http://localhost:4000/api/doc/')
    })

}






module.exports = start;