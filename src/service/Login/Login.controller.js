const { usuarios } = require('../../database')
const { v4 } = require('uuid')


const AllUser = (req, res) => {

    let user = usuarios;
    return res.status(200).json(user)
}


const AddUser = (req, res) => {
    const { body } = req;

    if (body.user == '' || body.password == '') {
        return res.status(400).json({
            msj: "Todo los campos son obligatorio"
        })
    }

    if (body.password.length < 4 || body.password.length > 8) {
        return res.status(400).json({
            msj: "La contraseña tiene que  4 a 8 caracter"
        })
    }

    body.id = v4();
    usuarios.push(body);
    return res.status(200).json({ msj: "Usuario guardado" })

}


const Userlogin = (req, res) => {
    const { body } = req;

    if (body.user == '' || body.password == '') {
        return res.status(400).json({
            msj: "Todo los campos son obligatorio"
        })
    }


    let user = usuarios.filter( ({user,password })=> user == body.user && password == body.password);

        if(user.length == 0){
            return res.status(400).json({
                msj: "usuario o password es incorrecto"
            })
        }
    return res.status(200).json(user)
}

module.exports = {
    AllUser, AddUser, Userlogin
}


/*const Prueba = (req,res)=>{
}


const Prueba = (req,res)=>{

}


const Prueba = (req,res)=>{

}*/