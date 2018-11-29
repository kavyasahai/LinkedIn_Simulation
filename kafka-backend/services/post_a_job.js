var { Jobs } = require('../../Backend/db/schema')
var UserSchema = require('../../Backend/models/user')

function handle_request(msg, callback) {
  var newJobs = new Jobs(msg)
  newJobs.save().then(() => {
    console.log('job posted')
    var email = msg.adminId
    UserSchema.findOneAndUpdate({ email }, { isRecruiter: true })
      .then(() => console.log('user is recruiter'))
      .catch(() => console.log('update user as recruiter failed'))
    callback(null, msg)
  }).catch(err => {
    callback(err.errmsg, [])
  })
}
exports.handle_request = handle_request
