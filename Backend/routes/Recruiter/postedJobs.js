var kafka = require("../../kafka/client");
var express = require("express");
const router = express.Router();

router.post("/recruiter/posted_jobs", function (request, response) {
  console.log("In posted jobs");
  kafka.make_request("posted_jobs", request.user.username, function (
    err,
    results
  ) {
    console.log("in results");
    console.log(results);
    if (err) {
      console.log("Inside err");
      response.json({
        status: "BAD_REQUEST",
        error: {
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
        data: "get posted jobs success"
      });
    }
  });
});

module.exports = router;
