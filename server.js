let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

let config = require('./config/config');
let http = require('http');
let path = require('path');

let app = express();
let Login = require('./backend/routes/login');
let Student = require('./backend/routes/studentRoutes');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser());

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/login',Login);
app.use('/student',Student);


app.get('*', function(req,res,next){
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})

//server start
app.listen(config.port,function(err){
    if(err){
        console.log('error found in server start' +err);
    }else{
        console.log("connected to server at port " +config.port);
    }
});



//databse connectivity
mongoose.connect('mongodb://localhost:27017/StudentDB');
mongoose.connection.on("connected",function(err){
    if(err){
        console.log("error in database connectivity" +err);
    }else{
        console.log('connected to database at port 27017');
    }
});



