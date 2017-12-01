var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//const api=

//var index = require('./routes/index');
//var users = require('./routes/users');

////var mongodb=require('mongodb');
//var mongoClient=mongodb.MongoClient;
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))  

app.use(express.static(path.join(__dirname,'dist')))
const api = require('./server/routes/api');

app.use('/api',api);

console.log("klk;lfk;"+api)

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'dist/index.html'))
}
)



/*
var mongoose = require('mongoose');
var url='mongodb://localhost:27017/sampleDB';
mongoose.connect(url,function(err,result){
    if(err){ console.log(err)}
    else {
      console.log("Connected")}
})*/
app.listen(4000, () => console.log('Example app listening on port 4000!'))
