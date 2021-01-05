const User =  require('../models/user');
const jwt = require('jsonwebtoken');
const expressJwt= require('express-jwt');

const {errorHandler} = require('../helpers/dbErrorHandler');
const e = require('express');

exports.signup =(req, res) => {
     //console.log("")
     const user = new User(req.body);
     user.save((err, user) => {
          if(err){
               return res.status(400).json({
                    err: errorHandler(err)
               });
          }
         user.salt = undefined
         user.hashed_password = undefined
         
          return res.json({
               user
          });

     })
};

exports.signin =(req,res) =>{
     const {email, password} =req.body;
     User.findOne({email}, (err, user) =>{
          if (err || !user) {
               return res.status(400).json({
                    err: "User with that email does not exist.Please signup"
               });
          
          }

          
     });
};