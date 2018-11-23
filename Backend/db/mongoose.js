var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://34.212.99.86:27017/linkedin")
  .then(() => console.log("Connected to MongoDB"))
  .catch(() => console.log("could not connect to mongodb:"));
module.exports = { mongoose };
