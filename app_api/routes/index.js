
const express = require('express');
const router = express.Router();
const ctrlHomes = require('../controllers/home');
const ctrlReservations = require('../controllers/reservations');
const ctrlUsers = require('../controllers/users');



//home routers
router
	.route('/home')
    .get(ctrlHomes.addHome)
	.post(ctrlHomes.addHome);
router

	.route('/home/:homeid')
	.put(ctrlHomes.updateHome)
	.get(ctrlHomes.readHome)
    .delete(ctrlHomes.deleteHome);

//user routers
router
    .route('/users')
    .get(ctrlUsers.addUser)
    .post(ctrlUsers.addUser);

router
    .route('/users/:userid')
    .put(ctrlUsers.updateUsers)
	.get(ctrlUsers.readUser)
	.delete(ctrlUsers.deleteUser);

//reservation routers
router
    .route('/reservations')
    .get(ctrlReservations.addReservation)
    .post(ctrlReservations.addReservation);

router
    .route('/reservations/:reservationid')
	.put(ctrlReservations.updateReservation)
	.get(ctrlReservations.readReservation)
	.delete(ctrlReservations.deleteReservation);

	
	




	
	
module.exports = router;