const User = require("../model/user");
var bcrypt = require('bcryptjs');

module.exports.getUsers = function (req, res) {
    let promise = User.find().exec();
    promise.then(
        function (user) {
            res.status(200).json(user);
        }
    ).catch(
        function (error) {
            console.log(error);
            res.status(500).json(error);
        }
    )
}


module.exports.getUser = function (req, res) {
    let id = req.params.id;
    let promise = User.findById(id).exec();
    promise.then(
        function (user) {
            res.status(200).json(user);
        }
    ).catch(
        function (error) {
            res.status(500).json(error);
        }
    )
}

module.exports.postUser = function (req, res) {
    let user = req.body;
    user = {
        nome: user.nome,
        email: user.email,
        funcao: 2,
        senha: bcrypt.hashSync(user.senha, 10),
    }
    let promisse = User.create(user);

    promisse.then(function (user) {
        res.status(201).json(user);
    }).catch(function (error) {
        res.status(400).json({ mensagem: "falha na requisição" })
    })
}





module.exports.delUser = function (req, res) {
    let id = req.params.id;
    let promise = User.findByIdAndDelete(id)
    promise.then(function (user) {
        res.status(200).json(user);
    }).catch(function (error) {
        res.status(400).json({ mensagem: "falha na requisição" })
    })
}