/* Get Reservations page*/
const Reservations = function(req, res){
    res.render('index', { title: 'Reservations' });
};

/*Export it*/
module.exports = {
    Reservations
};