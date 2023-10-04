const Item = require("../model/item");

module.exports.obterItens = function (req, res) {
    let promise = Item.find().exec();
    promise.then(
        function (item) {
            res.status(200).json(item);
        }
    ).catch(
        function (error) {
            console.log(error);
            res.status(500).json(error);
        }
    )
}

module.exports.obterItem = function (req, res) {
    let id = req.params.id

    let promise = Item.findById(id).exec();



    promise.then(
        function (item) {
            res.status(200).json(item);
        }
    ).catch(
        function (error) {
            console.log(error);
            res.status(500).json(error);
        }
    )
}

module.exports.inserirItem = function (req, res) {

    let date = Date.now()
    let dataAtual = new Date(date);
    dataAtual = dataAtual.toLocaleDateString();

    let itm = {
        titulo:req.body.titulo,
        tempoPreparo: req.body.tempoPreparo,
        rendimento: req.body.rendimento,
        dificuldade: req.body.dificuldade,
        introducao: req.body.introducao,
        ingredientes: req.body.ingredientes,
        preparo: req.body.preparo,
        dataCriacao:dataAtual
    }
    

    let promisse = Item.create(itm);

    promisse.then(function (item) {
        res.status(201).json(item);
    }).catch(function (error) {
        res.status(400).json({ mensagem: "falha na requisição" })
    })


}

module.exports.removerItem = function (req, res) {

    let id = req.params.id

    let promise = Item.findByIdAndDelete(id).exec();



    promise.then(
        function (item) {
            res.status(200).json(item);
        }
    ).catch(
        function (error) {
            console.log(error);
            res.status(500).json(error);
        }
    )
}