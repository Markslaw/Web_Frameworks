var express = require('express');
var router = express.Router();

const ctrlHome = require('../controllers/Home'); 
const ctrlReservations = require('../controllers/Reservations');
const ctrlLogin = require('../controllers/Login');
const ctrlSignUp = require('../controllers/SignUp');


/*Get Home page*/
router.get('/', ctrlHome.home); 
module.exports = router;


/* GET Reservations page. */
router.get('/Reservations', ctrlReservations.Reservations); 


/* GET login page. */
router.get('/Login',ctrlLogin.Login); 


/* GET SignUp page. */
router.get('/SignUp', ctrlSignUp.SignUp); 

module.exports = router;
