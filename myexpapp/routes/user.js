var express = require('express');
var router = express.Router();
var db = require('../database');

const Success = (res, successMsg) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send(successMsg);
}

const Error = (res, errorMsg) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send(errorMsg);
}

router.get('/', function (req, res, next) {
  Success(res, 'Server Running');
});

router.post('/create', function (req, res, next) {
  // store all the user input data
  const userDetails = req.body;

  // insert user data into users table
  var sql = 'INSERT INTO users SET ?';

  db.query(sql, userDetails, function (err, data) {
    if (err) {
      Error(res, { 'Error': err });
      throw err;
    }

    console.log("User data is inserted successfully ");
    Success(res, { 'Success': 'User data is inserted successfully' });
  });
  res.redirect('/user');  // redirect to user form page after inserting the data
});

router.post('/sitesurvey', function (req, res, next) {
  // store all the SiteSurvey input data
  const userDetails = req.body;

  // insert user data into users table
  var sql = 'INSERT INTO SiteSurvey SET ?';

  db.query(sql, userDetails, function (err, data) {
    if (err) {
      Error(res, { 'Error': err });
      throw err;
    }

    console.log("sitesurvey data is inserted successfully ");
    Success(res, { 'Success': 'sitesurvey data is inserted successfully' });
  });
});

module.exports = router;
