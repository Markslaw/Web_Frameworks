/* GET home page */

const home = function(req, res){
    res.render('Home', { title: 'Home' });
};



module.exports = { 
home
};
