var { Jobs } = require('../../Backend/db/schema')
var jobApplication = require('../../Backend/models/jobApplication')

function handle_request(msg, callback) {
  var username = msg
  Jobs.find({ adminId: username }, { jobId: 1, _id: 0 })
    .then(jobId_List => {
      var query_list = jobId_List.map(id => { return { jobID: id } })
      jobApplication.find({ $or: query_list }, { _id: 0 })
        .then(res => {
          callback(null, res)
        })
        .catch(err => callback(err.errmsg, []))
    })
}
exports.handle_request = handle_request
