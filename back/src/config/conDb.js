require("dotenv").config();


//hacer la conexion a la BDD en una funcion
//exportar la funcion

const mongoose = require("mongoose")

const conDb = async () => {
    //aca hacemos la conexion a la BDD con la URL que nos da mongoDB
    // URL
    await mongoose.connect("mongodb+srv://turihendrix:BGu7oIukKQPpDiHb@cluster0.xsrrtv0.mongodb.net/movies")
    console.log(process.env.MONGO_URI);
};

module.exports = conDb;