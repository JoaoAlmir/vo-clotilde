const Comment = require("../model/comment");

module.exports.getComments = async function (req, res) {
    try {
        const comments = await Comment.find().exec();
        res.status(200).json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}


module.exports.getComment = async function (req, res) {
    try {
        const id = req.params.id;
        const comment = await Comment.find(id).exec();

        if (!comment) {
            res.status(404).json({ message: 'Comment não encontrado' });
            return;
        }

        res.status(200).json(comment);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

module.exports.postComment = async function (req, res) {
    try {
        const date = Date.now();
        const dataAtual = new Date(date).toLocaleDateString();

        const cmt = {
            titulo: req.body.titulo,
            tempoPreparo: req.body.tempoPreparo,
            rendimento: req.body.rendimento,
            dificuldade: req.body.dificuldade,
            introducao: req.body.introducao,
            ingredientes: req.body.ingredientes,
            preparo: req.body.preparo,
            categoria: req.body.categoria,
            imagem: req.body.imagem,
            dataCriacao: dataAtual
        };

        const comment = await Comment.create(cmt);
        res.status(201).json(comment);
    } catch (error) {
        console.error(error);
        res.status(400).json({ mensagem: "Falha na requisição" });
    }
}


module.exports.delComment = async function (req, res) {
    try {
        const id = req.params.id;
        const comment = await Comment.findByIdAndDelete(id).exec();

        if (!comment) {
            return res.status(404).json({ message: 'Comment não encontrado' });
        }

        res.status(200).json(comment);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}