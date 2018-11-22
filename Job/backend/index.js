'use strict';
// Include our packages in our main server file
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');
var port = 3001;
var app = express();

var jwt = require('jsonwebtoken');
var {mongoose}=require('./mongoose');
var {jobdata}=require("./models/job")





//const bodyParser = require('body-parser');
const multer = require('multer');
//const uuidv4 = require('uuid/v4');
const path = require('path');
const fs = require('fs');
// Set up middleware

// Use body-parser to get POST requests for API use
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });
  
// Log requests to console
app.use(morgan('dev'));





const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads');
    },
    filename: (req, file, cb) => {
      
      //const newFilename = `${path.extname(file.originalname)}`;
      cb(null, file.originalname);
    
    
    },
    
  });

  const upload = multer({ storage });
  //const app = express();
  app.post('/', upload.any(), (req, res) => {
    //console.log("Req : ",req);
    console.log("Res : ",res.file);
    console.log(req.body);
    ImageInsert=req.body.description;
    
    console.log(ImageInsert);
    
    res.send();
});
  app.post('/download/:file(*)',(req, res) => {
    console.log("Inside download file");
    var file = req.params.file;
    var fileLocation = path.join(__dirname + '/uploads',file);
    var img = fs.readFileSync(fileLocation);
    var base64img = new Buffer(img).toString('base64');

    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(base64img);
  });
// Register new users

app.post('/data',function (req,res){
  console.log(req.body);
  // var Job;
  // var Location;
  // if(req.body.Job=='')
  // {
  //   Job="InternShip"
  // }
  // else{
  //   Job=req.body.Job
  // }
  jobdata.find({
    Position:"InternShip"


}).then(docs=>{
  res.send(docs);
   console.log(docs);
},(err) => {
    console.log(err);
    res.code = "400";
    res.end("Bad Request");
})
});
// Start the server
app.listen(port);
console.log('Your server is running on port ' + port + '.');