const asyncHandler = require('express-async-handler');
var User = require('../model/model');
// const Userdb = require("./models/userdbs");
// const Bankdb = require("./models/bankdbs");

// Verify user on login page
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty"});
        return;
    }
    else if (user && (await user.matchPassword(password))) {
      res.json({
        username: user.username,
        confirmPassword : user.confirmPassword,
        email: user.email,
      } ) 
      res.redirect('/dashboard');
    } 
    else {
      res.status(401)
      throw new Error('Invalid email or password')
    }
  })

  module.export = {
    authUser
}