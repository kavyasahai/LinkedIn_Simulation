const passport = require("passport");
var requireAuth = passport.authenticate("jwt", { session: false });
var kafka = require("../../kafka/client");
var express = require("express");
const router = express.Router();

router.post("/applyJob", function(request, response) {
  console.log(request.body);
  var save = new Applyjob({
    JobID: req.body.jobid,
    Timestamp: req.body.timestamp,
    UserID: "Kesha@gmail.com"
  });
  save.save().then(docs => {
    console.log("Row Created : ", docs);
    response.end("ok");
  });
});

module.exports = router;
