let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let db = require('../models');

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
router.use(bodyParser.json());

// Events - GET
router.get('/events', function(req, res){

    // Declare Variables
    let today = new Date();
    
    // Pulls an array of Event objects sorted from least to greatest, starting from the day of query
    db.events.findAll({
        where: {
            startDate: { gte: Date.UTC(today.getFullYear(), today.getMonth(), today.getDate(), 00, 00) },
        },
        order: [['startDate', 'ASC']]
    })
    .then(function(result){

        var accordionNames = accordionSort(result);
        var accordionNumber = accordionNames.length;
        var eventNumber = eventsPerAccordion(result, accordionNames);

        res.render('events', {
            eventsArray: result,
            accordionCount: accordionNumber,
            accordionNames: accordionNames,
            eventNumber: eventNumber,
            page: "events",
            success: true
        });

    })
    .catch(function(error){
        console.log(error);
        res.render('events', {
            eventsArray: [],
            accordionCount: 1,
            accordionNames: [],
            eventNumber: [],
            page: "events",
            success: false
        });
    });
    

});

// Events - POST
router.post('/events', function(req, res){

    // Add parsed form information into events table of the database
    db.events.create({title: req.body.title, description: req.body.description, location: req.body.location, startDate: req.body.startDate, endDate: req.body.endDate})
    .then(function(results){
        console.log(results);

        res.redirect('/events');

    })
    .catch(function(error){
        console.log(error);
    })


});

module.exports = router;

// Checks for number of unique accordions that will be needed in the ejs file and also reformats to be ejs friendly, returns array
function accordionSort(eventsArray){

    // Map dates (yyyy-mm) into new array
    var startDates = eventsArray.map(function(index){
        
        let dateString = index.startDate.toString();
        let month = dateString.slice(4, 7);
        let year = dateString.slice(11, 15);

        // Change Month Formatting
        switch (month){
            case "Jan":
                month = "January";
                break;
            case "Feb":
                month = "February";
                break;
            case "Mar":
                month = "March";
                break;
            case "Apr":
                month = "April";
                break;
            case "Jun":
                month = "June";
                break;
            case "Jul":
                month = "July";
                break;
            case "Aug":
                month = "August";
                break;
            case "Sep":
                month = "September";
                break;
            case "Oct":
                month = "October";
                break;
            case "Nov":
                month = "November";
                break;
            case "Dec":
                month = "December";
                break;
            default:
                break;

        }

        return `${month} ${year}`;

    })

    var tempArray = [];
    var check = false;
    tempArray.push(startDates[0]);

    // Checks for number of unique elements
    for (let start = 1; start < startDates.length; start++){
        for (let temp = 0; temp < tempArray.length; temp++){
            if (startDates[start] === tempArray[temp]){
                check = true;
            } 
        }

        if (!check){
            tempArray.push(startDates[start]);
        }

        check = false;

    }

    return tempArray;

}

// Sorts the number of events per accordion into an array for ejs use, returns array
function eventsPerAccordion(eventsArray, accordionArray){

    // Declare Variables
    var events = [];
    var index = 0;
    var counter = 0;
    var wordCompare;

    // Map Start Date of Events to Array
    var startDates = eventsArray.map(function(index){
        
        let dateString = index.startDate.toString();
        let month = dateString.slice(4, 7);
        let year = dateString.slice(11, 15);

        return `${month} ${year}`;

    });

    wordCompare = startDates[0];

    // Group as Duplicates per Event
    while (index < startDates.length){

        // Count Duplicates
        while (wordCompare == startDates[index]){
            counter++;
            index++;
        }

        // Push Number of Similar Dates into events array
        events.push(counter);

        counter = 0;
        wordCompare = startDates[index];

    }

    console.log(events);

    // Return array of similar events to match up with Accordion Names Array
    return events;

}