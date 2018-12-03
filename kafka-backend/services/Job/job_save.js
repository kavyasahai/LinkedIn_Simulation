var { mongoose } = require("../../db/mongoose");

var job = require("../../models/jobApplication");
function handle_request(msg, callback) {
  console.log(msg);
  job.findOne(
    {
      jobID: msg.jobid,
      emailID: msg.Userid
    },
    function(err, doc) {
      if (err) {
        console.log(err);
      } else {
        console.log("Docs", doc);
        if (doc == null) {
          
         
        }
      }
    }
  );
  var Job = new job({
    submitted: "no",
    emailID: msg.Userid,
    jobID: msg.jobid
  });

  // Job.save().then(
  //   docs => {
  //     callback(null, docs);
  //     console.log(docs);
  //   },
  //   err => {
  //     console.log(err);
  //     res.code = "400";
  //     callback(null, "BAd Request");
  //   }
  // );
}

exports.handle_request = handle_request;
