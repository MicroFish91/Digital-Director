// Upon page load
$(function(){

    // Calendar View Event Listener
    $("#calendarView").click(function(event){
        
        event.preventDefault();

        // Holds list of current events to pass to calendar
        let jsonArray = compileJSON();

        // Put JSON into localstorage
        localStorage.setItem("calendarObjs", JSON.stringify(jsonArray));

        document.location.href = "../calendar";

    });

    // Add Click Event to Add Event Button
    $("#addEvent").click(function(event){

        let $eventTitle = $('#eventTitle').val();
        let $eventLocation = $('#eventLocation').val();
        let $eventDescription = $('#eventDescription').val();
        let $startTime = $('#datetimepicker').val();
        let $endTime = $('#datetimepicker1').val();

        // Compares time to see if end date is after start date
        if(compareTimes($startTime.toString().slice(0, 4), $startTime.toString().slice(5, 7), $startTime.toString().slice(8, 10), $startTime.toString().slice(11, 13), $startTime.toString().slice(14, 16), $endTime.toString().slice(0, 4), $endTime.toString().slice(5, 7), $endTime.toString().slice(8, 10), $endTime.toString().slice(11, 13), $endTime.toString().slice(14, 16))) {

            // Compares start date with today's date to make sure it is the same or later
            if (compareToday($startTime.toString().slice(0, 4), $startTime.toString().slice(5, 7), $startTime.toString().slice(8, 10), $startTime.toString().slice(11, 13), $startTime.toString().slice(14, 16))) {

                // Check to see if all values have been inputted before posting to database
                if ($eventTitle && $eventLocation && $eventDescription && $startTime && $endTime) {

                    // Post form information to the database
                    $.post('/events', {title: $eventTitle, location: $eventLocation, description: $eventDescription, startDate: $startTime, endDate: $endTime});

                }
            
            }  else {

                alert("You have entered an event with a date before today, please re-enter and try again.");
                event.preventDefault();

            }

        } else {

            if($startTime && $endTime){

                alert("Your end time is greater than your start time, please re-enter and try again.");    
                event.preventDefault();

            }
        }
    });

    // Add Click Event to Trash Buttons
    $(".trashIt").click(function(event){

        var id = event.currentTarget.attributes[1].ownerElement.id.toString();

        // Remove first character
        id = id.split('');
        id.shift();
        id = id.join('');

        $(`#${id}`).remove();

        // Post form information to the database
        $.post('/deleteevent', {id: id});

    });

});

// Compares two times, returns true is second time is less than first time
function compareTimes(yearOne, monthOne, dayOne, hourOne, minuteOne, yearTwo, monthTwo, dayTwo, hourTwo, minuteTwo){

    var timeOne = new Date(Date.UTC(yearOne, monthOne, dayOne, hourOne, minuteOne, 0));
    var timeTwo = new Date(Date.UTC(yearTwo, monthTwo, dayTwo, hourTwo, minuteTwo, 0));

    if (timeOne >= timeTwo) {
        return false;
    } else {
        return true;
    }

}

// Compares time with today's time, returns true is date is today or later
function compareToday(yearOne, monthOne, dayOne, hourOne, minuteOne){

    var today = new Date();
    var timeOne = new Date(Date.UTC(today.getFullYear(), today.getMonth() + 1, today.getDate(), today.getHours(), today.getMinutes(), 0));
    var timeTwo = new Date(Date.UTC(yearOne, monthOne, dayOne, hourOne, minuteOne, 0));

    if (timeTwo >= timeOne){
        return true;
    } else {
        return false;
    }

}

// Compile JSON to include in header for parsing under calendar view
function compileJSON(){

    var $title = $('.eventTitle');
    var $location = $('.eventLocation');
    var $description = $('.eventDescription');
    var $start = $('.eventStart');
    var $end = $('.eventEnd');

    var objectArray = [];

    for (let i = 0; i < $title.length; i++){

        var placeholder = {};
        placeholder.title = $title[i].innerText.slice(7, 1000);
        placeholder.location = $location[i].innerText.slice(10, 1000);
        placeholder.description = $description[i].title.slice(13, 1000);
        placeholder.startDate = $start[i].innerText.slice(15, 1000);
        placeholder.endDate = $end[i].innerText.slice(14, 1000);

        objectArray.push(placeholder);

    }

    return objectArray;

}