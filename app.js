// imports
const express= require("express");
const app=express();
const bodyparser =require('body-parser');
const mongoose=require("mongoose");
const stockRoutes=require('./api/routes/stocks');
const morgan = require("morgan");
// middlewares
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
var username=process.env.db_name;
var username=process.env.db_username;
var password=process.env.db_password;

//mongoose.connect('mongodb://devangtyagi:Cryptonite_11@galaxy-invoicer-shard-00-00-oo0f9.mongodb.net:27017,galaxy-invoicer-shard-00-01-oo0f9.mongodb.net:27017,galaxy-invoicer-shard-00-02-oo0f9.mongodb.net:27017/test?ssl=true&replicaSet=galaxy-invoicer-shard-0&authSource=admin&retryWrites=true');
mongoose.connect('mongodb://userSET:X7IDmbtpId0jNsft@mongodb/invoicerdb');

//CORS HANDLER
app.use(morgan("dev"));  
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','* ');
    res.header('Access-Control-Allow-Headers','Orign,X-Requested-With,Content-Type,Accept,Authorization'); 
    if(req.method==="OPTIONS"){ 
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,PATCH");
    return res.status(200).json({});
    }
    next();

})

// routes which will handle req
app.use('/stock',stockRoutes);

app.use((req,res,next)=>{
    const error=new Error('Not Found');
    error.status=404;
    next(error);

});
app.use(((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({error:{message:error.messsage}})
}))
module.exports=app;
