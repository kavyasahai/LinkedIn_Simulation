var { Jobs } = require('../../Backend/db/schema')
function handle_request(msg, callback) {
  var newJobs = new Jobs(msg)
  newJobs.save().then(() => {
    console.log('job posted')
    callback(null, msg)
  }).catch(err => {
    callback(err.errmsg, [])
  })
}
exports.handle_request = handle_request
