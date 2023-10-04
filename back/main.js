const http = require("http");
const express_app = require("./config/express.js");
const db = require('./config/database.js');

//chama a função de express_app

db('mongodb://localhost:27017/voclotilde').then(_ => {

    let app = express_app();

    http.createServer(app).listen(app.get("port"), function () {
        console.log("Servidor express está rodando na porta: " + app.get("port"));
    });
    
}).catch(e => {
    console.error(e);
})