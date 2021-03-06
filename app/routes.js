var flash = require('connect-flash');
var Cto = require('./models/cto');
var Dev = require('./models/devs');


module.exports = function (app, passport) {


    app.get('/', function (req, res) {
        var successMsg = req.flash('success')[0];
        res.render('landing/home', {layout: 'homelayout',successMsg:successMsg,noMessages: !successMsg})

    });


    app.get('/recruiter', function (req, res) {

        res.render('users/cto', {
            layout: 'users'
        });
    });
    app.post('/recruiter', function (req, res) {


        var cto = new Cto({

            username: req.body.username,
            company: req.body.company,
            email: req.body.email


        });
        cto.save(function (err, result) {
            res.redirect('/thanks')
        })

    });

    app.get('/dev', function (req, res) {

        res.render('users/dev', {
            layout: 'users',

        });
    });
    app.post('/dev', function (req, res) {


        var dev = new Dev({

            username: req.body.username,
            email: req.body.email

        });
        dev.save(function (err, result) {
            res.redirect('/thanks')
        })

    });


    app.get('/demo', function (req, res) {

        res.render('landing/demo', {layout: 'homelayout'});
    });

    app.get('/thanks', function (req, res) {

        res.render('landing/thanks', {
            layout: 'users',

        });
    });





};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/login');
}

