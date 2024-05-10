const controller = require("../controller/comment");

module.exports = function (app) {
    //obter todos os comments
    app.get("/comments", controller.getComments);

    //obter comments pelo item
    app.get("/comments/:id", controller.getComment);

    //criar novo comment
    app.post("/comments", controller.postComment);
    
    //deletar comment pelo id
    app.delete("/comments/:id", controller.delComment);
}