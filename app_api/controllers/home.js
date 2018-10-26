const mongoose = require('mongoose');
const Homes = mongoose.model('Home');



const addHome = function (req, res) {
    Homes.create({
        description: req.body.description,
    }, (err, home) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json(home);
        }
    });
};





const updateHome = function (req, res) {
    if (!req.params.homeid) {
        res
            .status(404)
            .json({
                "message": "Not found, homeid is required"
            });
        return;
    }
    Homes
        .findById(req.params.homeid)
        .exec((err, Home) => {
                if (!Home) {
                    res
                        .json(404)
                        .status({
                            "message": "homeid not found"
                        });
                    return;
                } else if (err) {
                    res
                        .status(400)
                        .json(err);
                    return;
                }
                Home.description = req.body.description;
                Home.save((err, Home) => {
                    if (err) {
                        res
                            .status(404)
                            .json(err);
                    } else {
                        res
                            .status(200)
                            .json(Home);
                    }
                });
            }
        );
};

const readHome = function (req, res) {
    if (req.params && req.params.homeid) {
        Homes
            .findById(req.params.homeid)
            .exec((err, home) => {
                if (!home) {
                    res
                        .status(404)
                        .json({
                            "message": "Homeid not found"
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
                    .json(home);
            });
    } else {
        res
            .status(404)
            .json({
                "message": "No Homeid in request"
            });
    }
};

const deleteHome = function (req, res) {
    const homeid = req.params.homeid;
    if (homeid) {
        Homes
            .findByIdAndRemove(homeid)
            .exec((err, Home) => {
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
                "message": "No Homeid"
            });
    }
};

module.exports= {
    updateHome,
    deleteHome,
    readHome,
    addHome
};