if(process.env.NODE_ENV !== "production"){
    require('dotenv').config()
}

module.exports = {
    PORT :process.env.PORT,
    CONFIG_DB: {
        host:process.env.HOST ,
        user : process.env.USER,
        password: process.env.PASS ,
        port :process.env.DB_PORT ,
        database: process.env.DB ,
    }
};