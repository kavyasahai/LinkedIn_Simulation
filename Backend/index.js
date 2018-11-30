var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var cors = require("cors");
app.set("view engine", "ejs");
var mysql = require("mysql");
var pool = require("./pool");
const port = process.env.PORT || 3001;
var passport = require("passport");
var jwt = require("jsonwebtoken");
var morgan = require("morgan");
var requireAuth = passport.authenticate("jwt", { session: false });
var crypt = require("./app/crypt");
var db = require("./app/db");
var config = require("../Backend/config/database");
var jwt = require("jsonwebtoken");
var redis = require("redis");
var client = redis.createClient();
const multer = require("multer");

app.use(morgan("dev"));
var kafka = require("./kafka/client");
require("./db/mongoose");

//console.log("here");
//require('./app/routes')(app);
app.use(passport.initialize());

// Bring in defined Passport Strategy
require("./config/passport")(passport);
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(
  session({
    secret: "cmpe273_team2_linkedIn",
    resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    duration: 60 * 60 * 1000, // Overall duration of Session : 30 minutes : 1800 seconds
    activeDuration: 5 * 60 * 1000
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Allow Access Control
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("X-Content-Type-Options", "nosniff");
  next();
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    //const newFilename = `${path.extname(file.originalname)}`;
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });
//const app = express();
app.post("/", upload.any(), (req, res) => {
  //console.log("Req : ",req);
  console.log("Res : ", res.file);
  console.log(req.body);
  ImageInsert = req.body.description;

  console.log(ImageInsert);

  res.send();
});

app.post("/download/:file(*)", (req, res) => {
  console.log("Inside download file");
  var file = req.params.file;
  var fileLocation = path.join(__dirname + "/uploads", file);
  var img = fs.readFileSync(fileLocation);
  var base64img = new Buffer(img).toString("base64");

  res.writeHead(200, { "Content-Type": "image/png" });
  res.end(base64img);
});

app.post("/searchJob", function(request, response) {
  console.log("Search Job Post Request");
  kafka.make_request("jobSearch_topic", request.body, function(err, results) {
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

app.post("/saveJob", function(req, res) {
  console.log(req.body);
  var save = new savejob({
    JobID: req.body.jobid,
    Timestamp: req.body.timestamp,
    UserID: "Kesha@gmail.com"
  });
  save.save().then(docs => {
    console.log("Row Created : ", docs);
    res.end("ok");
  });
});

app.post("/applyJob", function(req, res) {
  console.log(req.body);
  var save = new Applyjob({
    JobID: req.body.jobid,
    Timestamp: req.body.timestamp,
    UserID: "Kesha@gmail.com"
  });
  save.save().then(docs => {
    console.log("Row Created : ", docs);
    res.end("ok");
  });
});

app.post("/login", function(request, response) {
  console.log("in request login", request.body.data);
  var sqlQuery =
    "SELECT * FROM users WHERE username = '" + request.body.username + "';";
  console.log(sqlQuery);

  client.get(sqlQuery, function(error, result) {
    console.log("INSIDE REDIS GET KEY");
    if (error) {
      console.log("REDIS GET ERROR.");
      res.json({
        status: "error",
        msg: "System Error, Try Again."
      });
    } else {
      if (result == null) {
        console.log("INSIDE REDIS NO KEY FOUND");
        kafka.make_request("linkedinlogin", request.body, function(
          err,
          results
        ) {
          console.log("in result");
          console.log(results);
          if (err) {
            console.log("Inside err");
            res.json({
              status: "error",
              msg: "System Error, Try Again."
            });
          } else {
            console.log("Inside else");
            console.log(results);
            response.json({
              updatedList: results
            });

            response.end();
          }
        });
      } else {
        console.log("INSIDE REDIS KEY FOUND AND GETTING KEY");
        console.log("KEY VALUE fOUND: ", result);
        var data = { username: request.body.username };
        var token = jwt.sign(data, config.secret, { expiresIn: 600000 });
        console.log("token=", token);
        const newToken = "Bearer " + token;
        console.log("token=", newToken);
        response.json({
          updatedList: newToken
        });
      }
    }
  });
});

app.post("/register", function(request, response) {
  console.log("In signup method");
  kafka.make_request("linkedinsignup", request.body, function(err, results) {
    console.log(results);
    if (err) {
      console.log("Inside err");
      response.json({
        status: "error",
        msg: "System Error, Try Again."
      });
    } else {
      response.send(JSON.stringify(results));
    }
  });
});
app.post("/prodetails", function(request, response) {
  console.log("In professional details method");
  kafka.make_request("linkedinprodetails", request.body, function(
    err,
    results
  ) {
    console.log(results);
    if (err) {
      console.log("Inside err");
      response.json({
        status: "error",
        msg: "System Error, Try Again."
      });
    } else {
      response.json({
        updatedList: results
      });
      response.end();
    }
  });
});
app.post("/locationdata", function(request, response) {
  console.log("In location method");
  kafka.make_request("linkedinloc", request.body, function(err, results) {
    console.log(results);
    if (err) {
      console.log("Inside err");
      response.json({
        status: "error",
        msg: "System Error, Try Again."
      });
    } else {
      response.json({
        updatedList: results
      });
      response.end();
    }
  });
});

app.post("/recruiter/post-a-job", function(request, response) {
  console.log("In post a job");
  kafka.make_request("post_a_job", request.body, function(err, results) {
    console.log("in results");
    console.log(results);
    if (err) {
      console.log("Inside err");
      response.json({
        status: "BAD_REQUEST",
        errors: {
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
        data: "Post job successful"
      });
    }
  });
});

app.post("/getRecruiterDashboardTop10", function(request, response) {
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

app.get("/getRecruiterDashboardTop5/:username", function(request, response) {
  console.log("Recruiter Dashboard Top 5 Post Request");
  kafka.make_request("recruiterDashboardTop5_topic", request.params, function(
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

app.get("/getRecruiterJobs/:username", function(request, response) {
  console.log("Get Recruiter Jobs GET Request");
  kafka.make_request("recruiterJobs_topic", request.params, function(
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

app.get("/getRecruiterDashboardCity/:jobId", function(request, response) {
  console.log("Get Recruiter Dashboard GET Request");
  kafka.make_request("recruiterDashboardCity_topic", request.params, function(
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

app.get("/getProfileViews", function(request, response) {
  console.log("Profile Views", request.query);
  kafka.make_request("get_profileviews", request.query, function(err, result) {
    console.log(result);
    if (err) {
      response.json({
        status: "error",
        msg: "Error in retrieving data."
      });
    } else {
      response.send(result);
    }
  });
});

app.get("/getClicksPerJob", function(request, response) {
  console.log("Job Clicks: ", request.query);
  kafka.make_request("get_clicksperjob", request.query, function(err, result) {
    console.log(result);
    if (err) {
      response.json({
        status: "error",
        msg: "Error in retrieving data."
      });
    } else {
      response.send(result);
    }
  });
});

app.get("/recruiter/posted_applications", requireAuth, function(
  request,
  response
) {
  console.log("In posted applications");
  kafka.make_request("posted_applications", request.user.username, function(
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
        data: "get posted applications success"
      });
    }
  });
});

app.listen(3001);
console.log("Server Listening on port 3001");
