const controller = require("../controller/user");

module.exports = function (app) {
    //obter todos os user
    app.get("/users", controller.getUsers);

    //obter a user pelo id
    app.get("/users/:id", controller.getUser);

    //criar novo user
    app.post("/users", controller.postUser);
    
    //deletar user pelo id
    app.delete("/user/:id", controller.delUser);
}