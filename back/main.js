const http = require("http");
const express_app = require("./config/express.js");
const db = require('./config/database.js');

//chama a função de express_app

db('mongodb+srv://joaoalmircos:s7N6mseEFzIFbNqh@cluster0.dm00r.mongodb.net/voclotilde?retryWrites=true&w=majority&appName=Cluster0').then(_ => {

    let port = process.env.PORT || 3000;
    let app = express_app(port);

    http.createServer(app).listen(app.get("port"), function () {
        console.log("Servidor express está rodando na porta: " + app.get("port"));
    });
    
}).catch(e => {
    console.error(e);
})