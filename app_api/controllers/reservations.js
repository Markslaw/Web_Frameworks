const mongoose = require('mongoose');
const Reservations = mongoose.model('Reservation');

const addReservation = function (req, res) {
    Reservations.create({
        custname: req.body.custname,
        description: req.body.description,
        dates: req.body.dates,
        email: req.body.email,
    }, (err, reservation) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json(reservation);
        }
    });
};

const readReservation = function (req, res) {
    if (req.params && req.params.reservationid) {
        Reservations
            .findById(req.params.reservationid)
            .exec((err, reservation) => {
                if (!reservation) {
                    res
                        .status(404)
                        .json({
                            "message": "Reservationid not found"
                        });
                    return;
                } else if (err) {
                    res
                        .status(404)
                        .json(err);
                    return;
                }
                res
                    .status(200)
                    .json(reservation);
            });
    } else {
        res
            .status(404)
            .json({
                "message": "No Reservationid in request"
            });
    }
};


const updateReservation = function (req, res) {
    if (!req.params.reservationid) {
        res
            .status(404)
            .json({
                "message": "reservationid required"
            });
        return;
    }
    Reservations
        .findById(req.params.reservationid)
        .exec((err, reservation) => {
                if (!reservation) {
                    res
                        .json(404)
                        .status({
                            "message": "reservationid was not found"
                        });
                    return;
                } else if (err) {
                    res
                        .status(400)
                        .json(err);
                    return;
                }
                reservation.custname = req.body.custname;
                reservation.description = req.body.description;
                reservation.dates = req.body.dates;
                reservation.email = req.body.email;
                reservation.save((err, reservation) => {
                    if (err) {
                        res
                            .status(404)
                            .json(err);
                    } else {
                        res
                            .status(200)
                            .json(reservation);
                    }
                });
            }
        );
};

const deleteReservation = function (req, res) {
    const reservationid = req.params.reservationid;
    if (reservationid) {
        Reservations
            .findByIdAndRemove(reservationid)
            .exec((err, reservation) => {
                    if (err) {
                        res
                            .status(404)
                            .json(err);
                        return;
                    }
                    res
                        .status(204)
                        .json(null);
                }
            );
    } else {
        res
            .status(404)
            .json({
                "message":"No reservationid"
            });
    }
};


module.exports= {
    addReservation,
    updateReservation,
    readReservation,
    deleteReservation
};