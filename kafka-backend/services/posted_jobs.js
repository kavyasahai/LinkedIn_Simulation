var { Jobs } = require("../models/job");
var jobApplication = require("../models/jobApplication");

function handle_request(msg, callback) {
  var username = msg;
  Jobs.find({ adminId: username }, { _id: 0 })
    .then(res => {
      callback(null, res)
    }).catch(err => callback(err.errmsg, []))
}
exports.handle_request = handle_request;
