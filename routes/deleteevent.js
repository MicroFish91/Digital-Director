let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let db = require('../models');

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
router.use(bodyParser.json());

// Events - POST
router.post('/deleteevent', function(req, res){

    console.log("test: " + req.body.id);



});

module.exports = router;

