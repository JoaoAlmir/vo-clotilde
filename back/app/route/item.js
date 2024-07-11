const controller = require("../controller/item");
const auth = require("../controller/auth");

module.exports = function (app) {
    //obter todos os itens
    app.get("/itens", controller.getItens);

    //obter a item pelo id
    app.get("/itens/:id", controller.getItem);

    //obter a item pela categoria
    app.get("/itens/categoria/:categoria", controller.getItemCategoria);

    // busca item pelo titulo
    app.get("/itens/busca/:texto", controller.searchItem);

    // checar se o token é valido
    app.use("/itens", auth.check_token);

    //criar novo item
    app.post("/itens", controller.postItem);
    
    //alterar item
    app.put("/itens/:id", controller.putItem);

    //deletar item pelo id
    app.delete("/itens/:id", controller.delItem);
}