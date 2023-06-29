const asyncHandler = require('express-async-handler');
var User = require('../model/model');

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
  
    if (user) {
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email
      if (req.body.password) {
        user.password = req.body.password
      }
  
      const updatedUser = await user.save()
  
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        
      })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })

  module.exports = {
    updateUserProfile,
}