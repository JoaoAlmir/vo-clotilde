var mongoose = require('mongoose');
module.exports = function () {
    var schema = mongoose.Schema({
        titulo: {
            type: String,
            required: true
        },
        tempoPreparo: {
            type: String,
            required: true
        },
        rendimento: {
            type: String,
            required: true
        },
        dificuldade: {
            type: String,
            required: true
        },
        introducao: {
            type: String,
            required: true
        },
        ingredientes: {
            type: String,
            required: true
        },
        preparo:{
            type: String,
            required: true
        },
        categoria:
        {
            type: String,
            required: true
        },
        imagem:{
            type: String,
            required: true
        },
        dataCriacao:{
            type: String,
            required: true
        }
        

    });
    return mongoose.model('Item', schema);
}();