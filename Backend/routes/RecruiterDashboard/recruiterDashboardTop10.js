const passport = require("passport");
var requireAuth = passport.authenticate("jwt", { session: false });
var kafka = require("../../kafka/client");
var express = require("express");
const router = express.Router();

router.post("/getRecruiterDashboardTop10", function(request, response) {
  console.log("Recruiter Dashboard Top 10 Post Request");
  kafka.make_request("recruiterDashboardTop10_topic", request.body, function(
    err,
    results
  ) {
    console.log(results);
    if (err) {
      response.json({
        status: "error",
        msg: "Error in retrieving data."
      });
    } else {
      response.send(JSON.stringify(results));
    }
  });
});

module.exports = router;
