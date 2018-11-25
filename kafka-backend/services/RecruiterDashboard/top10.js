var JobApplication = require("../../../Backend/models/jobApplication");
require("../../../Backend/db/mongoose");

function handle_request(msg, callback) {
  JobApplication.find(function(err, data) {
    if (err) {
      callback(err, "Error");
    } else {
      // if (user !== null) {
      callback(null, data);
      // } else {
      //   console.log("No Owner found");
      //   callback(null, []);
      // }
    }
  });
}

exports.handle_request = handle_request;
