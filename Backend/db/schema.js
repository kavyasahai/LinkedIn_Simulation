var mongoose = require("mongoose");

var db = mongoose.connection;
//db.on("error", console.error.bind(console, "MongoDB connection error: "));

exports.Jobs = mongoose.model("Jobs", {
  adminId: {
    type: String,
    required: true
  },
  jobId: {
    type: String,
    required: true
  },
  title: {
    type: String
  },
  jobDescription: {
    type: String
  },
  industry: {
    type: String
  },
  employmentType: {
    type: String
  },
  location: {
    type: String
  },
  jobFunction: {
    type: String
  },
  companyLogo: {
    type: String
  },
  numberOfApplications: {
    type: Number
  },
  isSave: {
    type: Boolean,
    required: true
  }
});
