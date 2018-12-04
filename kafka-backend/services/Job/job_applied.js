var { mongoose } = require("../../db/mongoose");

var job = require("../../models/job");

var jobApplication = require("../../models/jobApplication");
function handle_request(msg, callback) {

  console.log(msg);
  jobApplication.findOne(
    {
    
      emailID: msg.email
    },
    function(err, doc) {
      if (err) {
        console.log(err);
      } else {
        console.log("Docs", doc);
        
          console.log("null");
        }
      }
    
  );
}

exports.handle_request = handle_request;
