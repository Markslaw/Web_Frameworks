/* GET Sign Up page */
const SignUp = function (req, res) {
    res.render('SignUp', {title: 'Sign Up'});
};

/*Export it*/
module.exports = {
    SignUp
};