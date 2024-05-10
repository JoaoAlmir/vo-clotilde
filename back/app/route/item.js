const controller = require("../controller/item");

module.exports = function (app) {
    //obter todos os itens
    app.get("/itens", controller.getItens);

    //obter a item pelo id
    app.get("/itens/:id", controller.getItem);

    //obter a item pela categoria
    app.get("/itens/categoria/:categoria", controller.getItemCategoria);

    //criar novo item
    app.post("/itens", controller.postItem);
    
    //alterar item
    app.put("/itens/:id", controller.putItem);

    //deletar item pelo id
    app.delete("/itens/:id", controller.delItem);
}