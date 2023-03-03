const { Router } = require('express');
const { AllUser,AddUser,Userlogin } = require('./Login.controller');

const router = Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - user
 *         - password
 *       properties:
 *         user:
 *           type: string
 *           description: nombre de usuario
 *         password:
 *           type: string
 *           description: password del usuario
 *       example:
 *         userId: user
 *         title: 1234

 */

/**
 * @swagger
 * components:
 *   schemas:
 *    Get:
 *      type: object
 *      required:
 *        - nombre_corto
 *        - nombre_categoria
 *        - descripcion
 *      properties:
 *        nombre_corto:
 *          type: string
 *          description: nombre abreviado 
 *        nombre_categoria:
 *          type: string
 *          description: nombre de la categoria
 *          type: string
 *        descripcion:
 *          description: descripcion de la categoria
 *      example:
 *        nombre_corto: BEBI
 *        nombre_categoria: bebidas 
 *        descripcion:  Todo tipo de bebidas
 */

/** 
 * @swagger
 *  /api/user:
 *          get:
 *            summary: Todos los usuarios
 *            description: muestra todos los usuarios registrado 
 *            produces:
 *                  - application/json
 *            parameters:
 *               - in: body
 *                 schema:
 *                  type: array
 *                  items:
 *                   name : id
 *                   description: Recibe un id
 *            responses:
 *              '200':
 *                description: status 200  
 *                content:
 *                  application/json:
 *                    schema:
 *                      type: objert
 *                      properties:
 *                      user: 
 *                        type:string 
 *                         example:admin
 *                      password: 
 *                        type:int
 *                        example:1234
 *              
 *            tags: [usuario]      
 */

router.get('/', AllUser);


/**
 * @swagger
 * /api/user/add:
 *   post:
 *     summary: Nuevo usuario
 *     tags: [usuario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: The post was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       500:
 *         description: Some server error
 */ 

router.post('/add', AddUser);




/**
 * @swagger
 *  /api/user/login:
 *   post:
 *     summary: inicio de session
 *     tags: [usuario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: The post was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       500:
 *         description: Some server error
 */ 


router.post('/login', Userlogin);



module.exports = router;