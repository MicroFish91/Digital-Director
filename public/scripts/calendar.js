// Instantiate Variables
var p = MindFusion.Scheduling;
var date = p.DateTime.today();
var item;

// Parse Events Array
var eventsArray = JSON.parse(localStorage.getItem("calendarObjs"));

//create a new calendar instance
var calendar = new p.Calendar(document.getElementById("calendar"));
calendar.theme = "blue";

// Sets up event handlers for adding events to selected dates
calendar.selectionEnd.addEventListener(handleSelection);
calendar.headerClick.addEventListener(handleHeaderClick);

// Render Calendar
calendar.render();

// Loop through and set up events into calendar via eventsArray (parsed JSON)
for (let i = 0; i < eventsArray.length; i++) {

    item = new p.Item();
    item.subject = eventsArray[i].title;
    item.details = `Location: ${eventsArray[i].location}; Description: ${eventsArray[i].description}`;
    item.startTime = timeConfig(eventsArray[i].startDate.trim());
    item.endTime = timeConfig(eventsArray[i].endDate.trim());

    calendar.schedule.items.add(item);

}


// Click event for header
function handleHeaderClick(sender, args)
{
	if(sender.currentView === p.CalendarView.Timetable)
	{
		sender.date = sender.timetableSettings.dates.items()[0];
		sender.currentView = p.CalendarView.SingleMonth;
	}
}

// Click event to record and add events in customizable calendar view
function handleSelection(sender, args)
{
	if(sender.currentView === p.CalendarView.SingleMonth)
	{
		//cancel the default behavior
		args.cancel = true;
		
		var start = args.startTime;
        var end = args.endTime;
		
		//clear all dates from the timetable
		sender.timetableSettings.dates.clear();
		
        while(start < end)
		{
			sender.timetableSettings.dates.add(start);
            start = p.DateTime.addDays(start, 1);
			
		}
		
		sender.currentView = p.CalendarView.Timetable;
	}
}

// Configures the time in a way the the MindFusion Calendar API can read
function timeConfig(timeFormat){

    var today = new Date();
    var mm = timeFormat.slice(0, 3);

    // Assign the number value of the month
    switch (mm) {
        case "Jan":
            mm = 0;
            break;
        case "Feb":
            mm = 1;
            break;
        case "Mar":
            mm = 2;
            break;
        case "Apr":
            mm = 3;
            break;
        case "May":
            mm = 4;
            break;
        case "Jun":
            mm = 5;
            break;
        case "Jul":
            mm = 6;
            break;
        case "Aug":
            mm = 7;
            break;
        case "Sep":
            mm = 8;
            break;
        case "Oct":
            mm = 9;
            break;
        case "Nov":
            mm = 10;
            break;
        case "Dec":
            mm = 11;
            break;
    }

    var timeOne = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes(), 0));
    var timeTwo = new Date(Date.UTC(parseInt(timeFormat.slice(7, 11)), mm, parseInt(timeFormat.slice(4, 6)), parseInt(timeFormat.slice(12, 14)), parseInt(timeFormat.slice(15, 17)), 0));

    // Time Difference
    var difference = (timeTwo - timeOne) / 1000;

    var newDate = p.DateTime.today();
    newDate = p.DateTime.addSeconds(newDate, difference);

    return newDate;

}