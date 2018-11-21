var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://kesha:kesha123@ds155718.mlab.com:55718/homeaway")
  .then(() => console.log("Connected to MongoDB"))
  .catch(() => console.log("could not connect to mongodb:"));
module.exports = { mongoose };
