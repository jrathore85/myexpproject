var express = require('express');
var router = express.Router();
var db=require('../database');
router.get('/', function(req, res, next) { 
res.render('user'); 
});
router.post('/create', function(req, res, next) {
  
  // store all the user input data
  const userDetails=req.body;
 
  // insert user data into users table
  var sql = 'INSERT INTO users SET ?';
  db.query(sql, userDetails,function (err, data) { 
      if (err) throw err;
         console.log("User data is inserted successfully "); 
  });
 res.redirect('/user');  // redirect to user form page after inserting the data
}); 
router.post('/sitesurvey', function(req, res, next) {

// store all the SiteSurvey input data

const userDetails=req.body;
// insert user data into users table

var sql = 'INSERT INTO SiteSurvey SET ?';

db.query(sql, userDetails,function (err, data) {

if (err) throw err;

console.log("sitesurvey data is inserted successfully ");
res.send({"success":true});    
});

});
module.exports = router;