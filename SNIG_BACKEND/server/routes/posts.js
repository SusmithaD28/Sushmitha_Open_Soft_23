const express= require('express');
const router= express.Router();
const registerUser=require('./registerUser');
// const services = require('../services/render');
// const controller = require('../controller/controller');
// const multer = require('multer');

// const upload = multer({
//     dest: 'uploads/'
// })

router.post('/registerUser',require('./registerUser'));
router.get('/login',require('./login'));
// const services= require('../services/render');
// const controller = require('../controller/controller');
// /**
//  *  @description Root Route
//  *  @method GET /
//  */
router.get('/', function(req, res)
    {services.homeRoutes});

// /**
//  *  @description add users
//  *  @method GET / add-user
//  */
router.get('/add-user', function(req, res){services.add_user})

// //creating route
// /**
//  *  @description for update user
//  *  @method GET /update-user
//  */
router.get('/update-user', function(req, res){services.update_user})

// //API
router.post('/api/users', function(req, res){controller.post});
router.post('/api/users', function(req, res){controller.create});
router.get('/api/users', function(req, res){controller.find});
router.put('/api/users/:id', function(req, res){controller.update});
router.delete('/api/users/:id', function(req, res){controller.delete});
module.exports = router;