const express = require("express");
const routes_item = require("../app/route/item");
const cors = require('cors');

module.exports = function(){
    let app = express(); 
    app.set("port", 9999);
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false })); 
    routes_item(app);


    return app;
}
