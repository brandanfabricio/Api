const { Router } = require('express');
const { Allcategory, AddCategory, UpdateCategory, DeleteCategory, FainNamber, FainById } = require('./Categoria.controller');


const router = Router();



/** 
 * @swagger
 *  /api/catalogo/categoria:
 *          get:
 *            summary: Todas las categoria
 *            description: muestra todos las categoria registrado 
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
 *                      $ref: '#/components/schemas/Post'
 *              
 *            tags: [categoria]      
 */






router.get('/', Allcategory);
/** 
 * @swagger
 *  /api/catalogo/categoria/{:id}:
 *          get:
 *            summary: buscar por id 
 *            description: busca la categoria deacuerdio a su id
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
 *                      $ref: '#/components/schemas/Post'
 *              
 *            tags: [categoria]      
 */

router.get('/:id', FainById);
/** 
 * @swagger
 *  /api/catalogo/categoria/buscar/{:nombre}:
 *          get:
 *            summary: buscar por nombre 
 *            description: busca la categoria deacuerdio a su nombre
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
 *                      $ref: '#/components/schemas/Post'
 *              
 *            tags: [categoria]      
 */

router.get('/buscar/:nombre', FainNamber);



/**
 * @swagger
 * /api/catalogo/categoria/add:
 *   post:
 *     summary: Nueva categoria
 *     tags: [categoria]
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
router.post('/add', AddCategory);


/**
 * @swagger
 * /api/catalogo/categoria/updata/{:id}:
 *   put:
 *     summary: actualizar categoria por id
 *     tags: [categoria]
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

router.put('/update/:id', UpdateCategory);



/**
 * @swagger
 * /api/catalogo/categoria/delete/{:id}:
 *   delete:
 *     summary: eliminar producto
 *     tags: [categoria]
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

router.delete('/delete/:id', DeleteCategory);



module.exports = router;