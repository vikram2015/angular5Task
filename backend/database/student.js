let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let StudentSchema = new Schema({

    userId:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isStudent:{
        type:Boolean,
        required:false
    },
    studentName:{
        type:String,
        required:true
    },
    rank:{
        type:Number,
        required:true
    },
    studentClass:{
        type:String,
        required:true
    },
    questionRecord:{
        type:Object
    },
    classRange:{
        type:String,
        required:true
    }

});

let Student = module.exports = mongoose.model('Student',StudentSchema);