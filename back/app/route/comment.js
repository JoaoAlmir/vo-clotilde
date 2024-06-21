const controller = require("../controller/comment");
const auth = require("../controller/auth");

module.exports = function (app) {
    //obter todos os comments
    app.get("/comments", controller.getComments);

    //obter comments pelo item
    app.get("/comments/:id", controller.getComment);

    //obter comments pelo idItem
    app.get("/comments/item/:id", controller.getCommentByItem);

    // checar se o token é valido
    app.use("/comments", auth.check_token);

    //criar novo comment
    app.post("/comments", controller.postComment);
    
    //deletar comment pelo id   
    app.delete("/comments/:id", controller.delComment);

}