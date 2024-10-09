const express = require("express");
const routes_item = require("../app/route/item");
const routes_user = require("../app/route/user");
const routes_auth = require("../app/route/auth");
const routes_comment = require("../app/route/comment");

const cors = require('cors');

module.exports = function(port){
    let app = express(); 
    app.set("port", port);
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false })); 
    routes_item(app);
    routes_user(app);
    routes_auth(app);
    routes_comment(app);


    return app;
}
