const express= require('express');
const router= express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');// 
const registerUser = require('../routes/registerUser');

router.post('/registerUser', registerUser);
router.post('/registerUser',require('./registerUser'));
router.get('/login',require('./login'));
/**
 *  @description Root Route
 *  @method GET /
 */
router.get('/', function(req, res){
    services.homeRoutes(req,res);
});
    

/**
 *  @description add users
 *  @method GET / add-user
 */
router.get('/add-user', function(req, res){
    services.add_user(req,res);
});

//creating route
/**
 *  @description for update user
 *  @method GET /update-user
 */
router.get('/update-user', function(req, res){
    services.update_user(req,res);
});


// //API
// router.post('/api/users', function(req, res){controller.post});
router.post('/api/users', function(req, res){controller.create});
router.get('/api/users', function(req, res){controller.find});
router.put('/api/users/:id', function(req, res){controller.update});
router.delete('/api/users/:id', function(req, res){controller.delete});
module.exports = router;