var { mongoose } = require("../../db/mongoose");

var User = require("../../models/user");

function handle_request(msg, callback) {
  console.log("MSG++++", msg);
  User.find(
    {
      firstname: msg.name
    },
    function(err, doc) {
      if (err) {
        console.log(err);
      } else {
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
