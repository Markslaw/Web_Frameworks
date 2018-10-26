const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    description: {
               type: String,
		       //lowercase: true,
		      // required: true,
	},
	});
	
	mongoose.model('Home', HomeSchema);
	
	
	
	
	
		   
	
	
         		
	           
	           
	