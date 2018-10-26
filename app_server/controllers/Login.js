/* GET log in page */
const Login = function (req, res) {
    res.render('Login', {title: 'Login'});
};

/*Export it*/
module.exports = {
    Login
};