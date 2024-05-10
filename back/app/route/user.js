const controller = require("../controller/user");

module.exports = function (app) {
    //obter todos os user
    app.get("/users", controller.getUsers);

    //obter a item pelo id
    app.get("/users/:id", controller.getUser);

    //criar novo item
    app.post("/users", controller.postUser);
    
    //deletar item pelo id
    app.delete("/user/:id", controller.delUser);
}