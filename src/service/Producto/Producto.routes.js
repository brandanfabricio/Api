const { Router } = require('express');
const { AllProduct,FainNamber,FainById,AddProduct,DeleteProduct,UpdateProduct} = require('./Producto.controller');


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
 *
 */





/** 
 * @swagger
 *  /api/catalogo/producto:
 *          get:
 *            summary: Todos los producto
 *            description: muestra todos los productos registrado 
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
 *            tags: [producto]      
 */

router.get('/', AllProduct);
/** 
 * @swagger
 *  /api/catalogo/producto/{:id}:
 *          get:
 *            summary: buscar  por id
 *            description: busca  los producto por id 
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
 *            tags: [producto]      
 */
router.get('/:id', FainById);
/** 
 * @swagger
 *  /api/catalogo/producto/buscar/{:nombre}:
 *          get:
 *            summary: buscar por nombre
 *            description: buscar producto por nombre 
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
 *            tags: [producto]      
 */
router.get('/buscar/:nombre', FainNamber);


/**
 * @swagger
 * /api/atalogo/producto/add:
 *   post:
 *     summary: Registrar Producto
 *     tags: [producto]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post2'
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
router.post('/add', AddProduct);

/**
 * @swagger
 * /api/atalogo/producto/update/{:id}:
 *   put:
 *     summary: actualizar producto por id
 *     tags: [producto]
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
router.put('/update/:id', UpdateProduct);


/**
 * @swagger
 * /api/atalogo/producto/delete/{:id}:
 *   delete:
 *     summary: eliminar producto
 *     tags: [producto]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post2'
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
router.delete('/delete/:id', DeleteProduct);



module.exports = router;