var db = require("../../backend/app/db");
var pool = require("../../backend/pool");
var Users = require("../../Backend/models/user");
require("../../Backend/db/mongoose");

function handle_request(msg, callback) {
  var newUser = {
    username: msg.username,
    password: msg.password,
    firstname: msg.firstname,
    lastname: msg.lastname
  };

  // Attempt to save the user
  db.createUser(
    newUser,
    function(res) {
      console.log("user created");
      // var resData = {
      //   username: msg.email,
      //   password: msg.password,
      //   firstname: msg.firstname,
      //   lastname: msg.lastname
      // };
      // callback(null, resData);
    },
    function(err) {
      console.log("error creating user");
      console.log(err);
      //  callback(null, []);
    }
  );

  //save user details in MongoDB
  var user = new Users({
    email: msg.username,
    firstname: msg.firstname,
    lastname: msg.lastname
  });

  user.save().then(
    user => {
      console.log("Sign-up successful.");
      callback(null, user);
    },
    err => {
      console.log("Could not sign-up");
      callback(null, []);
    }
  );
}

exports.handle_request = handle_request;
