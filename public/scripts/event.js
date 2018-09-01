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
            $.post('/events', {title: $eventTitle, location: $eventLocation, description: $eventDescription, startDate: $startTime, endDate: $endTime});

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

        // Check if Accordion is empty, if so delete


        // Post form information to the database
        $.post('/deleteevent', {id: id});

    });

});