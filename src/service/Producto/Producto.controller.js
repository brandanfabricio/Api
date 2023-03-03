let { categoria, producto } = require('../../database');
const { v4 } = require('uuid')

function UnirDatos() {

    producto.map((productos) => {
        let buscarCategoria = categoria.filter(({ id }) => id == productos.categoria)
        productos.categoria = {
            id: buscarCategoria[0].id,
            nombre_corto: buscarCategoria[0].nombre_corto,
            nombre_categoria: buscarCategoria[0].nombre_categoria,
            descripcion: buscarCategoria[0].descripcion
        };
        return productos;
    })
}

const AllProduct = (req, res) => {


    return res.status(200).json({ data: producto })

}

const FainNamber = (req, res) => {
    const { nombre } = req.params;

    let productoActual = producto.filter(({ nombre_producto }) => nombre_producto == nombre)

    if (productoActual.length == 0) {
        return res.status(400).json({
            msj: " El producto existe"
        })
    }

    return res.status(200).json({ data: productoActual[0] })


}

const FainById = (req, res) => {

    const { params } = req;


    let productoActual = producto.filter(({ id }) => id == params.id)

    if (productoActual.length == 0) {
        return res.status(400).json({
            msj: "El producto no existe"
        })
    }

    return res.status(200).json({ data: productoActual[0] })
}



const AddProduct = (req, res) => {
    const { body } = req;

    if (body.sku == '' || body.nombre_producto == '' || body.categoria == '') {
        return res.status(400).json({
            msj: " los campos sku , nombre, categoria son obligarotio"
        })
    }

    if (body.sku.length > 5) {
        return res.status(400).json({
            msj: "El campo sku excede la longitid de 5 caracter "
        })
    }




    body.id = v4();
    body.sku = body.sku.toLocaleUpperCase()
    // le.log(body)
    producto.push(body);
    UnirDatos();
    return res.status(200).json({ msj: "Producto Guardada Correctamente" });


}

const UpdateProduct = (req, res) => {
    const { body } = req;
    const { params } = req;


    if (body.sku == '' || body.nombre_producto == '' || body.categoria == '') {
        return res.status(400).json({
            msj: " los campos sku , nombre, categoria son obligarotio"
        })
    }

    if (body.sku.length > 5) {
        return res.status(400).json({
            msj: "El campo sku excede la longitid de 5 caracter "
        })
    }


    let ProductoActual = producto.filter(({ id }) => id == params.id)

    if (ProductoActual.length == 0) {
        return res.status(400).json({
            msj: " El Producto no existe"
        })
    }


    ProductoActual[0].sku = body.sku.toLocaleUpperCase();
    ProductoActual[0].nombre_producto = body.nombre_producto;
    ProductoActual[0].descripcion = body.descripcion;
    ProductoActual[0].precio = body.precio;
    ProductoActual[0].categoria = body.categoria;
    // categoria.push(categoriaActual[0]);

    UnirDatos()
    return res.status(200).json({
        msj: "Categoria Actualizada"
    })

}

const DeleteProduct = (req, res) => {
    const { params } = req;

    let categoriaActual = producto.filter(({ id }) => id != params.id)

    console.log(categoriaActual)


    // if (categoriaActual.length == 0) {
    //     return res.status(400).json({
    //         msj: " La categoria no existe"
    //     })
    // }


    categoria = [];

    categoria.push(categoriaActual[0])
    return res.status(200).json({
        msj: "Producto Eliminada"
    })
}





module.exports = {
    AllProduct,
    FainNamber,
    FainById,

    AddProduct,
    UpdateProduct,
    DeleteProduct,
}