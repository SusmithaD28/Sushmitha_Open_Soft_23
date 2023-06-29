const asyncHandler = require('express-async-handler');
var User = require('../model/model');

const registerBankUser = asyncHandler(async (req, res) => {
    const { accNum, bankName,ifscCode,accHolderName,phNum,aadharCardNum } = req.body
  
    const userExists = await User.findOne({accHolderName})
  
    if (userExists) {
      res.status(400)
      throw new Error('User already exists')
    }
  
    const user = await User.create({
        accNum, 
        bankName,
        ifscCode,
        accHolderName,
        phNum,
        aadharCardNum
    })
  
    if (user) {
      res.status(201).json({
        accNum: user.accNum,
        bankName: user.bankName,
        ifscCode: user.ifscCode,
        accHolderName: user.accHolderName,
        phNum: user.phNum,
        aadharCardNum:user.aadharCardNum
      })
    } else {
      res.status(400)
      throw new Error('Invalid user data')
    }
  })

  module.exports = {
    registerBankUser,
}