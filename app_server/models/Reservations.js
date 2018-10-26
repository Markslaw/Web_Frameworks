const mongoose = require('mongoose');

const ReservationsSchemaSchema = new mongoose.Schema({
    name: {
               type: String,
		       lowercase: true,
		       required: true,
	},
	description: {
		       type: String,
			   lowercase: true,
			   required: true,
	},
	
	dates: {
		       type: String,
			   lowercase: true,
			   required: true,
	},
	
	email: {
		       type: String,
			   lowercase: true,
			   required: true,
	},
	});