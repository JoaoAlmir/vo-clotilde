const controller = require("../controller/auth");

module.exports = function (app) {
    //obter todos os user
    app.post("/login", controller.login);

    app.post("/check", controller.check_token);

}