const Item = require("../model/item");

module.exports.obterItens = async function (req, res) {
    try {
        const itens = await Item.find().exec();
        res.status(200).json(itens);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

module.exports.obterItem = async function (req, res) {
    try {
        const id = req.params.id;
        const item = await Item.findById(id).exec();

        if (!item) {
            res.status(404).json({ message: 'Item não encontrado' });
            return;
        }

        res.status(200).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

module.exports.inserirItem = async function (req, res) {
    try {
        const date = Date.now();
        const dataAtual = new Date(date).toLocaleDateString();

        const itm = {
            titulo: req.body.titulo,
            tempoPreparo: req.body.tempoPreparo,
            rendimento: req.body.rendimento,
            dificuldade: req.body.dificuldade,
            introducao: req.body.introducao,
            ingredientes: req.body.ingredientes,
            preparo: req.body.preparo,
            dataCriacao: dataAtual
        };

        const item = await Item.create(itm);
        res.status(201).json(item);
    } catch (error) {
        console.error(error);
        res.status(400).json({ mensagem: "Falha na requisição" });
    }
}

module.exports.atualizarItem = async function (req, res) {
    try {
        const id = req.params.id;

        const itemExistente = await Item.findById(id).exec();
        if (!itemExistente) {
            return res.status(404).json({ message: 'Item não encontrado' });
        }

        const { titulo, tempoPreparo, rendimento, dificuldade, introducao, ingredientes, preparo } = req.body;

        if (titulo) itemExistente.titulo = titulo;
        if (tempoPreparo) itemExistente.tempoPreparo = tempoPreparo;
        if (rendimento) itemExistente.rendimento = rendimento;
        if (dificuldade) itemExistente.dificuldade = dificuldade;
        if (introducao) itemExistente.introducao = introducao;
        if (ingredientes) itemExistente.ingredientes = ingredientes;
        if (preparo) itemExistente.preparo = preparo;

        const itemAtualizado = await itemExistente.save();

        res.status(200).json(itemAtualizado);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

module.exports.removerItem = async function (req, res) {
    try {
        const id = req.params.id;
        const item = await Item.findByIdAndDelete(id).exec();

        if (!item) {
            return res.status(404).json({ message: 'Item não encontrado' });
        }

        res.status(200).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}