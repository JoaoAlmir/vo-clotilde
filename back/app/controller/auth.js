const jwt = require("jsonwebtoken");
const User = require("../model/user");
var bcrypt = require('bcryptjs');

module.exports.login = function (req, res) {
    let info_login = req.body;
    let promise = User.findOne({ email: info_login.email });
    promise.then(
        function (user) {
            if (bcrypt.compareSync(info_login.senha, user.senha)) {
                let token = jwt.sign({id:user._id,funcao:user.funcao},"senhasecreta")
                res.status(200).json({token:token, nome:user.nome, funcao:user.funcao});
            }
            else {
                res.status(401).send("login falhou");

            }
        }
    ).catch(
        function (error) {
            res.status(401).send("login falhou");
        }
    )

}

module.exports.check_token = function(req, res, next){
    let token = req.headers.token;
    jwt.verify(token, 'senhasecreta', function(err, decoded){
        if(err){
            return res.status(401).send("Token inválido!");
        }else{
            next();
        }
    })      
}