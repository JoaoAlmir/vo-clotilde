const controller = require("../controller/item");

module.exports = function (app) {
    //obter todos os itens
    app.get("/itens", controller.obterItens);

    //obter a item pelo id
    app.get("/itens/:id", controller.obterItem);

    //obter a item pela categoria
    app.get("/itens/categoria/:categoria", controller.obterItemCategoria);

    //criar novo item
    app.post("/itens", controller.inserirItem);
    
    //alterar item
    app.put("/itens/:id", controller.atualizarItem);

    //deletar item pelo id
    app.delete("/itens/:id", controller.removerItem);
}