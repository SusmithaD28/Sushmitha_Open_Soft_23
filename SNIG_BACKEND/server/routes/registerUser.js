const asyncHandler = require('express-async-handler');
const User = require('../model/model');

//create and save new User
const registerUser = asyncHandler(async (req, res) => {
      let payload=req.body;
    
      const userExists = await User.findOne({ email: req.body.email })
      
      if (userExists) {
        res.status(400)
        throw new Error('User already exists')
      }
      
      const userEntry = await User.create({
        name: payload.name,
        email: payload.email,
        country: payload.country,
        city: payload.city,
        phNum: payload.phNum,
        username: payload.username,
        password: payload.password,
        confirmPassword: payload.confirmPassword
      })
      
      let userRegistry = new User(userEntry);
      
      userRegistry.save((registerErr, result) =>
      {
        if(registerErr)
        {
          return res.status(500).send({message: 'error'});
        }
        else
        {
          return res.status(200).send({message: 'user details stored'});
        }
      });
    });

    module.exports = {
      registerUser
  };