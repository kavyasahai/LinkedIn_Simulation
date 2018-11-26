var Users = require("../../Backend/models/user");
require("../../Backend/db/mongoose");

function handle_request(msg, callback) {
  Users.update(
    { email: msg.username },
    { $set: { country: msg.country, zipcode: msg.zipcode } },
    function(err, result) {
      if (err) {
        callback(err, "Error");
      } else {
        callback(null, result);
      }
    }
  );
}

exports.handle_request = handle_request;
