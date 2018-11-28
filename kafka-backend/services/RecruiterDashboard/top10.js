var JobApplication = require("../../../Backend/models/jobApplication");
require("../../../Backend/db/mongoose");

function handle_request(msg, callback) {
  JobApplication.aggregate([
    {
      $match: {
        submittedTime: {
          $ne: null
        }
      }
    },
    {
      $group: {
        _id: { jobId: "$jobId" },
        count: { $sum: 1 },
        jobId: { $first: "$jobId" }
      }
    },
    { $sort: { count: -1 } },
    { $limit: 10 }
  ]).then(
    result => {
      if (result.length !== 0) {
        //second query
        console.log("result TOP 101 =====", result[0]._id.jobId);

        var jobIdMonth = [];
        for (var index = 0; index < result.length; index++) {
          //  jobIds[index] = result[index]._id.jobId;

          JobApplication.aggregate([
            {
              $match: {
                submittedTime: {
                  $ne: null
                },
                jobId: result[index]._id.jobId
              }
            },
            {
              $project: {
                jobId: result[index]._id.jobId,
                month: { $month: "$submittedTime" },
                _id: 0
              }
            }
          ]).then(result => {
            if (result.length !== 0) {
              console.log("result TOP 102 =====", result);
              jobIdMonth.push(jobIdMonth, result);
              // jobIdMonth += result;
              console.log("ARRAY====", jobIdMonth);
            }
          });
        }
      } else {
        callback(null, "There is no data");
      }
    },
    err => {
      callback(err, "Error");
    }
  );
}

exports.handle_request = handle_request;
