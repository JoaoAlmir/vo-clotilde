var mongoose = require('mongoose');
const user = require('./user');
module.exports = function () {
    var schema = mongoose.Schema({
        texto:{
            type: String,
            required: true
        },
        user:{
            type: String,
            required: true
        },
        idItem:{
            type: String,
            required: true
        }
        

    });
    return mongoose.model('Comment', schema);
}();