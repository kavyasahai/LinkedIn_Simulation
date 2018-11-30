var { mongoose } = require("../../Backend/db/mongoose");
var Job = require("../../Backend/models/job");
function handle_request(msg, callback) {
  console.log("Inside Search Request:", msg);

  Job.find({
    Position: msg.Job
  }).then(
    docs => {
      callback(null, docs);
      console.log(docs);
    },
    err => {
      console.log(err);
      res.code = "400";
      callback(null, "Bad Request");
    }
  );
}

exports.handle_request = handle_request;
