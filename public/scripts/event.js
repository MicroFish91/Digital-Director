$(function(){

    // Add Click Event to Add Event Button
    $("#addEvent").click(function(event){

        let $eventTitle = $('#eventTitle').val();
        let $eventLocation = $('#eventLocation').val();
        let $eventDescription = $('#eventDescription').val();
        let $startTime = $('#datetimepicker').val();
        let $endTime = $('#datetimepicker1').val();

        if ($eventTitle && $eventLocation && $eventDescription && $startTime && $endTime) {

            // Post form information to the database
            $.post('/events', {title: $eventTitle, location: $eventLocation, description: $eventDescription, startDate: $startTime, endDate: $endTime}, updateResponse($eventTitle, $eventLocation, $eventDescription, $startTime, $endTime));

        }

    });

});

function updateResponse(eventTitle, eventLocation, eventDescription, startTime, endTime){
    console.log(`${eventTitle}, ${eventLocation}, ${eventDescription}, ${startTime}, ${endTime}`);
}