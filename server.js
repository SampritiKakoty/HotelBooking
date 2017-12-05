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

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))  

app.use(express.static(path.join(__dirname,'dist')))
const api = require('./server/routes/api');

app.use('/api',api);

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'src/index.html'))
}
)




app.listen(4000, () => console.log('Example app listening on port 4000!'))
