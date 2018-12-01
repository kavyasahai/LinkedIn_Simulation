const passport = require("passport");
var requireAuth = passport.authenticate("jwt", { session: false });
var kafka = require("../../kafka/client");
var express = require("express");
const router = express.Router();

router.post("/recruiter/post-a-job", function(request, response) {
  console.log("In post a job");
  kafka.make_request("post_a_job", request.body, function(err, results) {
    console.log("in results");
    console.log(results);
    if (err) {
      console.log("Inside err");
      response.json({
        status: "BAD_REQUEST",
        errors: {
          code: "400",
          description: err
        },
        payload: null
      });
    } else {
      console.log("Inside else");
      response.json({
        status: "OK",
        payload: results,
        data: "Post job successful"
      });
    }
  });
});

module.exports = router;
