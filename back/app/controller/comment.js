const Comment = require("../model/comment");
const jwt = require("jsonwebtoken");


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

module.exports.getCommentByItem = async function (req, res) {
    try {
        const id = req.params.id;
        const comment = await Comment.find({ idItem: id }).exec();

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
        const cmt = {
            user: req.body.user,
            texto: req.body.texto,
            idItem: req.body.idItem,
            idUser: req.body.idUser
        };

        const comment = await Comment.create(cmt);
        res.status(201).json(comment);
    } catch (error) {
        console.error(error);
        res.status(400).json({ mensagem: "Falha na requisição" });
    }

}


module.exports.delComment = async function (req, res) {
    const id = req.params.id;

    let token = req.headers.token;
    let user = jwt.verify(token, "senhasecreta");
    let funcao = user.funcao;
    let idUser = user.id;

    const comment = await Comment.findById(id).exec();


    if (funcao == 1 || idUser == comment.idUser) {
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
    else {
        res.status(401).json({ mensagem: "Usuário não autorizado" });
    }

}

module.exports.delAllCommentByItem = async function (req, res) {
    const id = req.params.id;

    let token = req.headers.token;
    let user = jwt.verify(token, "senhasecreta");
    let funcao = user.funcao;

    if (funcao == 1) {
        try {
            const id = req.params.id;

            const comment = await Comment.deleteMany({ idItem: id }).exec();

            if (!comment) {
                return res.status(404).json({ message: 'Item não encontrado' });
            }

            res.status(200).json(comment);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }

    }
    else {
        res.status(401).json({ mensagem: "Usuário não autorizado" });
    }

}

