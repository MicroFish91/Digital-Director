let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let db = require('../models');

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
router.use(bodyParser.json());

// Events - GET
router.get('/calendar', function(req, res){
    
    res.render('calendar', {
        page: "calendar"
    });

});

// Events - POST
// router.post('/calendar', function(req, res){

// });

module.exports = router;