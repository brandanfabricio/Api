let { producto } = require('../../database');

const Exportar = (req, res) => {
    const { params } = req;

    let ProductoActual = producto.filter(({ id }) => id == params.id);


    let csv = `
sku,  nombre_producto , descripcion_producto , precio , nombre_corto_categoria , nombre_categoria, descripcion_categoria
   ${ProductoActual[0].sku},${ProductoActual[0].nombre_producto},${ProductoActual[0].descripcion},${ProductoActual[0].precio},${ProductoActual[0].categoria.nombre_corto},${ProductoActual[0].categoria.nombre_categoria},${ProductoActual[0].categoria.descripcion}
        `

        
    res.attachment('product.csv').send(csv)
}


module.exports = { Exportar };