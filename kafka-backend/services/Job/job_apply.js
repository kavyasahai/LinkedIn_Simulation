var { mongoose } = require("../../db/mongoose");

var job = require("../../models/job");

var jobApplication = require("../../models/jobApplication");
function handle_request(msg, callback) {
  var count;
  var Job = new jobApplication({
    submitted: "yes",
    emailID: msg.email,
    jobID: msg.jobid,
    url:msg.url,
    firstname:msg.firstname,
    lastname:msg.lastname,
    
    
  });
  console.log(msg);
  jobApplication.findOne(
    {
      jobID: msg.jobid,
      emailID: msg.email
    },
    function(err, doc) {
      if (err) {
        console.log(err);
      } else {
        console.log("Docs", doc);
        if (doc == null) {
          Job.save().then(
            docs => {
              callback(null, docs);
              console.log(docs);
            },
            err => {
              console.log(err);
              res.code = "400";
              callback(null, "BAd Request");
            }
          );
          console.log("null");
        }
        else{
                  jobApplication.update(
                    {  jobID: msg.jobid,
                      emailID: msg.email },
                    { $set: { submitted:"yes", submitttedTime:msg.timestamp} },
                    function(err, result) {
                      if (err) {
                        callback(err, "Error");
                      } else {
                        callback(null, result);
                      }
                    }
                  );
        }
      }
    }
  );
}

exports.handle_request = handle_request;
