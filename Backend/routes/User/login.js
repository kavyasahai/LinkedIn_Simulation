const passport = require("passport");
var requireAuth = passport.authenticate("jwt", { session: false });
var kafka = require("../../kafka/client");
var express = require("express");
const router = express.Router();
var redis = require("redis");
var client = redis.createClient();
var jwt = require("jsonwebtoken");
var config = require("../../config/database");

router.post("/login", function(request, response) {
  console.log("in request login", request.body.data);
  var sqlQuery =
    "SELECT * FROM users WHERE username = '" + request.body.username + "';";
  console.log(sqlQuery);

  client.get(sqlQuery, function(error, result) {
    console.log("INSIDE REDIS GET KEY");
    if (error) {
      console.log("REDIS GET ERROR.");
      res.json({
        status: "error",
        msg: "System Error, Try Again."
      });
    } else {
      if (result == null) {
        console.log("INSIDE REDIS NO KEY FOUND");
        kafka.make_request("linkedinlogin", request.body, function(
          err,
          results
        ) {
          console.log("in result");
          console.log(results);
          if (err) {
            console.log("Inside err");
            res.json({
              status: "error",
              msg: "System Error, Try Again."
            });
          } else {
            console.log("Inside else");
            console.log("KAF LOGIN RES:", results);
            client.set(sqlQuery, results);
            response.json({
              updatedList: results
            });

            response.end();
          }
        });
      } else {
        console.log("INSIDE REDIS KEY FOUND AND GETTING KEY");
        console.log("KEY VALUE fOUND: ", result);
        // var data = { username: request.body.username };
        // var token = jwt.sign(data, config.secret, { expiresIn: 600000 });
        // console.log("token=", token);
        // const newToken = "Bearer " + token;
        // console.log("token=", newToken);
        response.json({
          updatedList: result
        });
      }
    }
  });
});

module.exports = router;
