const asyncHandler = require('express-async-handler');
var User = require('../model/model');

//Delete a user with specified user id in the request
//exports.delete=(req, res)=>{

//}
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
  
    if (user) {
      await user.remove()
      res.json({ message: 'User removed' })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })

  module.export = {
    deleteUser
}