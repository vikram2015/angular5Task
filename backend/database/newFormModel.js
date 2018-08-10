let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let NewFormSchema = new Schema({

    classRange:{
        type:String,
        required:true
    },
    class:{
        type:String,
        required:false
    },
    forms:{
        type:Array,
        required:true
    }
});


let NewForm = module.exports = mongoose.model('NewForm', NewFormSchema);