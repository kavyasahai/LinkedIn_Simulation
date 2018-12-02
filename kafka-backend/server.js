var connection = new require("./kafka/Connection");
//topics files
//var signin = require('./services/signin.js');

var login = require("./services/login");
var signup = require("./services/signup");
var location = require("./services/location");
var prodetails = require("./services/prodetails");
var post_a_job = require("./services/post_a_job");
var posted_applications = require("./services/posted_applications");
var posted_jobs = require("./services/posted_jobs");
var recruiterDashboardTop10 = require("./services/RecruiterDashboard/top10");
var recruiterDashboardTop5 = require("./services/RecruiterDashboard/top5");
var recruiterDashboardCity = require("./services/RecruiterDashboard/city");
var recruiterJobs = require("./services/RecruiterDashboard/recruiterJobs");
var clicksperjob = require("./services/RecruiterDashboard/clicksperjob");
var ProfileViews = require("./services/ProfileViews/ProfileViews");
var jobSearch = require("./services/jobSearch.js");
var Connection = require("./services/connection");
var Channel = require("./services/Chat/channel");
var Message = require("./services/Chat/message");
var User = require("./services/user");

function handleTopicRequest(topic_name, fname) {
  //var topic_name = 'root_topic';
  var consumer = connection.getConsumer(topic_name);
  var producer = connection.getProducer();
  console.log("server is running ");

  consumer.on("message", function (message) {
    console.log("Message kafka....", message);
    console.log("message received for " + topic_name + " ", fname);
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);

    fname.handle_request(data.data, function (err, res) {
      console.log("after handle" + res);
      var payloads = [
        {
          topic: data.replyTo,
          messages: JSON.stringify({
            correlationId: data.correlationId,
            data: res
          }),
          partition: 0
        }
      ];
      producer.send(payloads, function (err, data) {
        console.log(data);
      });
      return;
    });
  });
}
// Add your TOPICs here
//first argument is topic name
//second argument is a function that will handle this topic request
handleTopicRequest("linkedinlogin", login);
handleTopicRequest("linkedinsignup", signup);
handleTopicRequest("linkedinloc", location);
handleTopicRequest("linkedinprodetails", prodetails);
handleTopicRequest("post_a_job", post_a_job);
handleTopicRequest("recruiterDashboardTop10_topic", recruiterDashboardTop10);
handleTopicRequest("recruiterDashboardTop5_topic", recruiterDashboardTop5);
handleTopicRequest("recruiterJobs_topic", recruiterJobs);
handleTopicRequest("get_profileviews", ProfileViews);
handleTopicRequest("posted_applications", posted_applications);
handleTopicRequest("posted_jobs", posted_jobs);
handleTopicRequest("recruiterDashboardCity_topic", recruiterDashboardCity);
handleTopicRequest("jobSearch_topic", jobSearch);
handleTopicRequest("get_clicksperjob", clicksperjob);
handleTopicRequest("connection", Connection);
handleTopicRequest("channel", Channel);
handleTopicRequest("message", Message);
handleTopicRequest("user", User);
