const mongoose = require("mongoose");

const jobApplicationSchema = new mongoose.Schema({
  jobID: String,
  emailID: String,
  firstname: String,
  lastname: String,
  city: String,
  pointOfInformation: String,
  questions: Array,
  disabilityQuestion: Array,
  submitted: Boolean,
  savedTime: Date,
  submittedTime: Date,
  clickTime: Date
});

module.exports = mongoose.model(
  "jobApplication",
  jobApplicationSchema,
  "jobApplication"
);
