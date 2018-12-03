var { mongoose } = require("../../db/mongoose");

var job = require("../../models/job");

var jobApplication = require("../../models/job");
function handle_request(msg, callback) {
  var count;
  console.log(msg);
  jobApplication.find(
    {
      postedBy: msg.email
    },
    function(err, doc) {
      if (err) {
        console.log(err);
      } else {
        console.log("Docs", doc);
        if (doc == null) {
          console.log(null);
          callback(null, null);
        }
        callback(null, doc);
      }
    }
  );
}

exports.handle_request = handle_request;
