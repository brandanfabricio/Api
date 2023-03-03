let { categoria } = require('../../database');
const { v4 } = require('uuid')



const Allcategory = (req, res) => {

    return res.status(200).json({ data: categoria })

}

const FainNamber = (req, res) => {
    const { nombre } = req.params;

    let categoriaActual = categoria.filter(({ nombre_categoria }) => nombre_categoria == nombre)

    if (categoriaActual.length == 0) {
        return res.status(400).json({
            msj: " La categoria no existe"
        })
    }

    return res.status(200).json({ data: categoriaActual[0] })


}

const FainById = (req, res) => {

    const { params } = req;


    let productoActual = categoria.filter(({ id }) => id == params.id)

    if (productoActual.length == 0) {
        return res.status(400).json({
            msj: "La categoria no existe"
        })
    }

    return res.status(200).json({ data: productoActual[0] })
}







const AddCategory = (req, res) => {
    const { body } = req;

    if (body.nombre_corto == '' || body.nombre_categoria == '') {
        return res.status(400).json({
            msj: " los campos Nombre corto y Nombre categoria son obligarotio"
        })
    }

    if (body.nombre_corto.length > 5) {
        return res.status(400).json({
            msj: "El campo nombre exede la longitid de 5 caracter "
        })
    }




    body.id = v4();
    body.nombre_corto = body.nombre_corto.toLocaleUpperCase()
    categoria.push(body);
    return res.status(200).json({ msj: "Categoria Guardada Correctamente" });


}

const UpdateCategory = (req, res) => {
    const { body } = req;
    const { params } = req;


    console.log(body);
    console.log(params.id)

    if (body.nombre_corto == '' || body.nombre_categoria == '') {
        return res.status(400).json({
            msj: " los campos Nombre corto y Nombre categoria son obligarotio"
        })
    }
    let categoriaActual = categoria.filter(({ id }) => id == params.id)

    console.log(categoriaActual)
    if (categoriaActual.length == 0) {
        return res.status(400).json({
            msj: " La categoria no existe"
        })
    }

    categoriaActual[0].nombre_corto = body.nombre_corto.toLocaleUpperCase()
    categoriaActual[0].descripcion = body.descripcion
    categoriaActual[0].nombre_categoria = body.nombre_categoria


    // categoria.push(categoriaActual[0]);

    return res.status(200).json({
        msj: "Categoria Actualizada"
    })

}




const DeleteCategory = (req, res) => {
    const { params } = req;

    let categoriaActual = categoria.filter(({ id }) => id != params.id)

    console.log(categoriaActual)


    // if (categoriaActual.length == 0) {
    //     return res.status(400).json({
    //         msj: " La categoria no existe"
    //     })
    // }


    categoria = [];

    categoria.push(categoriaActual[0])
    return res.status(200).json({
        msj: "Categoria Eliminada"
    })
}





module.exports = {
    Allcategory,
    AddCategory,
    UpdateCategory,
    DeleteCategory,
    FainNamber,
    FainById
}