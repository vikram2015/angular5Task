let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let LoginSchema = new Schema({

    userId:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:false
    },
    isStudent:{
        type:Boolean,
        required:false
    }

});

let Login = module.exports = mongoose.model('Login',LoginSchema);