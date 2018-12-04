var { mongoose } = require("../../db/mongoose");

var jobApp = require("../../models/jobApplication");

var job = require("../../models/job");

function handle_request(msg, callback) {
  var count;
  console.log(msg);
  job.find(
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
          docs.map(doc => {
            jobApp.find(
              {
                jobID: doc._id,
                submitted: "no"
              },
              function(err, saves) {
                if (err) {
                  console.log(err);
                  // callback(null, null);
                } else {
                  console.log("Docs", saves);
                  if (saves == null) {
                    console.log(null);
                    // callback(null, null);
                  } else {
                    console.log(saves);
                    // callback(null, saves);
                  }
                }
              }
            );
          });
        }
      }
    }
  );
}

exports.handle_request = handle_request;
