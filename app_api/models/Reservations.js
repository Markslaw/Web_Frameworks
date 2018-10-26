const mongoose = require('mongoose');

const ReservationsSchema = new mongoose.Schema({
    custname: {
        type: String,
        lowercase: true,
     //   required: true,
    },
    description: {
        type: String,
        lowercase: true,
     //   required: true,
    },

    dates: {
        type: String,
        lowercase: true,
     //   required: true,
    },

    email: {
        type: String,
        lowercase: true,
      //  required: true,
    },
});

mongoose.model('Reservation', ReservationsSchema);