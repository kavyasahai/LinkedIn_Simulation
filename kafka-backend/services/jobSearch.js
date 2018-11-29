var { mongoose } = require("../../Backend/db/mongoose");
var { job } = require("../../Backend/models/job");
function handle_request(msg, callback) {
  console.log("Inside Search Request:", msg);

  var Job = msg.Job;

  jobdata
    .find({
      Position: Job
    })
    .then(
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
}

exports.handle_request = handle_request;
