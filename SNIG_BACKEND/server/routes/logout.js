const asyncHandler = require('express-async-handler');
var User = require('../model/model');


//taken from following vid, refer if any error
//https://www.youtube.com/watch?v=NNzwjWXUiLU&list=PLynWqC6VC9KMwdsbBIG68YEBMlUrTwed-&index=37


const logOutUser = asyncHandler(async (req, res) => {
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("Error")
        }else{
            res.render('index', {title: "login", logout: "logout successfull!"})
        }
    })
})

module.export = {
    logOutUser,
}