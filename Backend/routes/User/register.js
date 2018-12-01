const passport = require("passport");
var requireAuth = passport.authenticate("jwt", { session: false });
var kafka = require("../../kafka/client");
var express = require("express");
const router = express.Router();

router.post("/register", function(request, response) {
  console.log("In signup method");
  kafka.make_request("linkedinsignup", request.body, function(err, results) {
    console.log(results);
    if (err) {
      console.log("Inside err");
      response.json({
        status: "error",
        msg: "System Error, Try Again."
      });
    } else {
      response.send(JSON.stringify(results));
    }
  });
});

module.exports = router;
