const mongoose = require('mongoose');
const Users = mongoose.model('User');



const addUser = function (req, res) {
    Users.create({
        forename: req.body.forename,
		surname: req.body.surname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    }, (err, user) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json(user);
        }
    });
};





const readUser = function (req, res) {
    if (req.params && req.params.userid) {
        Users
            .findById(req.params.userid)
            .exec((err, user) => {
                if (!user) {
                    res
                        .status(404)
                        .json({
                            "message": "Userid not found"
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
                    .json(user);
            });
    } else {
        res
            .status(404)
            .json({
                "message": "No Userid in request"
            });
    }
};

const updateUsers = function (req, res) {
    if (!req.params.userid) {
        res
            .status(404)
            .json({
                "message": "User id required"
            });
        return;
    }
    Users
        .findById(req.params.userid)
        .exec((err, user) => {
                if (!user) {
                    res
                        .json(404)
                        .status({
                            "message": "userid was not found"
                        });
                    return;
                } else if (err) {
                    res
                        .status(400)
                        .json(err);
                    return;
                }
                user.forename = req.body.forename;
                user.surname = req.body.surname;
                user.email = req.body.email;
                user.username = req.body.username;
                user.password = req.body.password;
                user.save((err, user) => {
                    if (err) {
                        res
                            .status(404)
                            .json(err);
                    } else {
                        res
                            .status(200)
                            .json(user);
                    }
                });
            }
        );
};


const deleteUser = function (req, res) {
    const userid = req.params.userid;
    if (userid) {
        Users
            .findByIdAndRemove(userid)
            .exec((err, user) => {
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
                "message":"No userid"
            });
    }
};




   module.exports= {
	  addUser,
       updateUsers,
	  readUser,
	  deleteUser
   };