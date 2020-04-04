const router = require('express').Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const sendMail = require('../utils/sendingEmail');

// Getting Employee Model
let Employee = require('../models/employee.model');
let ResetPass = require('../models/resetPassword.model');
let userReq = require('../models/Request.model');

/* GET employees listing. */
router.route('/').get((req, res) => {
  Employee.find()
    .then(employee => res.json(employee))
    .catch(err => res.status(400).json('Error: ' + err));
});

// To check for Specific Employee
router.route('/check:id').get((req, res) => {
  Employee.findById(req.params.id)
    .then(employee => {
      res.json(employee)
      console.log(employee);
      
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// Delete Employee
router.route('/delete:id').delete((req, res) => {
  console.log(req.params.id);
  Employee.findByIdAndRemove(req.params.id)
    .exec()
    .then(() => res.json('employee deleted.' + req.params.id))
    .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/login').post((req, res) => {
  
  const email = req.body.email;
  const password = req.body.password;
  
  // Find employee by email
  Employee.findOne({ email })
    .then(employee => {
      
      // Check if employee exists
      if (!employee) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }      
      
      // Check password
      bcrypt.compare(password, employee.password).then(isMatch => {
        if (isMatch) {
          // Employee matched
          // Create JWT Payload
          const payload = {
            id: employee.id,
            email: employee.email,
            role: employee.role
          };
          
          // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: "7 days"  // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
});

router.route('/update').post((req, res) => {
  Employee.findById(req.body.id)
    .then(employee => {
        employee.firstName = req.body.firstName;
        employee.lastName = req.body.lastName;
        employee.address = req.body.address;
        employee.phone = Number(req.body.phone);
        employee.gender = req.body.gender;

        employee.save()
            .then(() => res.json('Employee details Updated! => ' + employee))
            .catch(err => res.status(400).json('Error: ' + err));    
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const role = 1;
  const address = '';
  const phone = Number(0000000000);
  const gender = '';

  const newEmployee = new Employee({ 
    firstName,
    lastName,
    email,
    password,
    role,
    address,
    phone,
    gender,
  });

  Employee.findOne({email})
    .then(employee => {
        if(employee) {
            res.json('Oops! Email id is already taken.');
        } else {
          // Hash password before saving in database
          bcrypt.genSalt(10, (err, salt) => {
            if (err) throw err;
            bcrypt.hash(newEmployee.password, salt, (error_, hash) => {
              if (error_) console.log(error_);
              newEmployee.password = hash;
              newEmployee.save()
                  .then(() => res.json('Employee added! => ' + newEmployee))
                  .catch(err => res.status(400).json('Error: ' + err));
            
            });
          });    
        }
    })
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/forgot').post((req, res) => {
  
  const email = req.body.email;
  console.log("email", email)

  Employee.findOne({email})
    .then(employee => {
      if(employee.email === req.body.email) {
        
        ResetPass.findOne({email})
          .then(existingRequest => {
            
            // const _token = '';

            //payload must be created
            const payload = {
              id: employee.id,
              email: employee.email,
            };
            console.log("payload", payload)
            console.log("keys.secretOrKey", keys.secretOrKey);

            //sign the token with 3 days of expirations
            jwt.sign(
              payload,
              keys.secretOrKey,
              {
                expiresIn: '2 days' // 3 days in seconds
              },
              (err, token) => {
                
                // if user have already requested for request than update the token
                if (existingRequest) {

                  existingRequest.email = email;
                  existingRequest.token = token;

                  existingRequest.save()
                    .then(() => {
                      sendMail.forgotPassword(email, token);
                      res.json('token details Updated! => ' + existingRequest)
                    })
                    .catch(err => res.status(400).json('Error: ' + err));
                
                } else {

                  const newResetPassRequest = new ResetPass({
                    email: email,
                    token: token, // new token
                  });

                  newResetPassRequest.save()
                    .then(() => {
                      sendMail.forgotPassword(email, token);
                      res.json('token details Added! => ' + newResetPassRequest)
                    })
                    .catch(err => res.status(400).json('Error: ' + err));
                }
              }
            );
          })
          .catch(err => res.status(400).json('Error: ' + err))
      } else {
        res.status(400).json('Error: Email id does not match oue records');
      }   
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

//Reset User Password API
router.route('/reset').post((req, res) => {
  console.log("in the reset API....")
  const _token = req.body._token;
  const password = req.body.password;
  
  jwt.verify(_token, keys.secretOrKey, function(err, decoded) {
    console.log(decoded) // decoded token
    if(!err){
      
      //find the user from Employee dictonary
      Employee.findById(decoded.id)
        .then(employee => {

            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
              if (err) throw err;
              bcrypt.hash(password, salt, (error_, hash) => {
                if (error_) console.log(error_);
                
                employee.password = hash;
      
                //Go to Reset Password and delete the record so it can't be used again
                ResetPass.findOneAndRemove(employee.email)
                  .exec()
                  .then(() => {
                    
                    //onec that is done save the new password into the database
                    employee.save()
                      .then(() => {
                        res.json('Employee Password Updated! => ' + employee)
                      })
                      .catch(err => res.status(400).json('Error: ' + err));
                  })
                  .catch(err => res.status(400).json('Error: ' + err));
              });
            });    
        })
        .catch(err => res.status(400).json('Error: ' + err));
    } else {
      res.json('Error! ' + err);
    }
  });
});

// user request API
router.route('/request_quote').post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  const newEmployee = new userReq({ 
    firstName,
    lastName,
    email,
  });

  newEmployee.save()
      .then(() => {
        sendMail.userRequest(firstName, lastName, email);
        res.json('Request added! => ' + newEmployee);
      })
      .catch(err => res.status(400).json('Error: ' + err));
            
});

module.exports = router;