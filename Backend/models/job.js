const mongoose = require("mongoose");

const jobdataSchema = new mongoose.Schema({
  title: String,
  description: String,
  industry: String,
  employmentType: String,
  location: String,
  jobFunction: String,
  applicantsCount: String,
  viewsCount: String,
  postedDateTime: Date,
  clicks: String,
  postedBy: String,
  company: String
});

module.exports = mongoose.model("job", jobdataSchema, "job");
