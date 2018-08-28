let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

// Test Stuff.....
var objectOne = {title: "titleOne", location: "locationOne", description: "descriptionOne", start: "01/01/1991", end: "02/02/1992"};
var objectTwo = {title: "titleTwo", location: "locationTwo", description: "descriptionTwo", start: "03/03/1993", end: "04/04/1994"};
var objectThree = {title: "titleThree", location: "locationThree", description: "descriptionThree", start: "05/05/1995", end: "06/06/1996"};

var tempArray = [objectOne, objectTwo, objectThree];

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
router.use(bodyParser.json());

// Events - GET
router.get('/events', function(req, res){

    // Send current DV event parameters
    res.render('events', {
        objectsArray: tempArray
    });

});

// Events - POST
router.post('/events', function(req, res){

    console.log(req.body);

});

module.exports = router;