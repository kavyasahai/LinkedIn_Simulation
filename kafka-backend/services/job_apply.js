

var { mongoose } = require("../db/mongoose");

var job=require('../models/job');

var jobApplication=require('../models/jobApplication')
function handle_request(msg, callback) {
    var count;
    console.log(msg);
   jobApplication.findOne({
        jobID:msg.jobid,
        emailID:msg.email
    },function(err,doc){
            if (err){
           console.log(err);
            }        
            else{
            console.log("Docs",doc);
            if(doc == null){
                console.log(null);
                callback(null,null);
            }
           }
        }
);
    }

exports.handle_request = handle_request;
