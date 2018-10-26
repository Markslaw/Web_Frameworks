const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    forename: {
               type: String,
		       lowercase: true,
		       required: true,
	},
	surname: {
		       type: String,
			   lowercase: true,
			   required: true,
	},
	
	username: {
		       type: String,
			   lowercase: true,
			   required: true,
	},
	
	email: {
		       type: String,
			   lowercase: true,
			   required: true,
	},
	
	password: {
		       type: String,
			   required: true,
	},
	});
	
	
	
	
	
		   
	
	
         		
	           
	           
	