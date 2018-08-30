let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let op = require('sequelize');
let db = require('../models');
let moment = require('moment');

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
router.use(bodyParser.json());

// Events - GET
router.get('/events', function(req, res){

    // Declare Variables
    let today = new Date();
    let month = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    // Pulls an array of Event objects sorted from least to greatest, starting from the day of query
    db.events.findAll({
        where: {
            startDate: { gte: Date.UTC(today.getFullYear(), today.getMonth(), today.getDate(), 00, 00) },
        },
        order: [['startDate', 'ASC']]
    })
    .then(function(result){

        var accordionNumber = accordionCounter(result);
        
        res.render('events', {
            eventsArray: result,
            monthsArray: month,
            accordionCount: accordionNumber
        });

    })
    .catch(function(error){
        console.log(error);
        res.send("<p> Error Loading Page </p>");
    })
    

});

// Events - POST
router.post('/events', function(req, res){

    // Add parsed form information into events table of the database
    db.events.create({title: req.body.title, description: req.body.description, location: req.body.location, startDate: req.body.startDate, endDate: req.body.endDate})
    .then(function(results){
        console.log(results);
    })
    .catch(function(error){
        console.log(error);
    })


});

module.exports = router;

// Checks for number of unique accordions that will be needed in the ejs file
function accordionCounter(eventsArray){

    // Map dates (yyyy-mm) into new array
    var startDates = eventsArray.map(function(index){
        
        let dateString = index.startDate.toString();
        let month = dateString.slice(4, 7);
        let year = dateString.slice(11, 15);

        return `${year}-${month}`;

    })

    var tempArray = [];
    tempArray.push(startDates[0]);

    // Checks for number of unique elements
    for (let start = 0; start < startDates.length; start++){
        for (let temp = 0; temp < tempArray.length; temp++){
            if (startDates[start] === tempArray[temp]){
            } else {
                tempArray.push(startDates[start]);
            }
        }
    }

    return tempArray.length;

}