$(document).ready(function () {
    console.log("--- starting")
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'listDay,listWeek,month'
        },

        // customize the button names,
        // otherwise they'd all just say "list"
        views: {
            listDay: {
                buttonText: 'list day'
            },
            listWeek: {
                buttonText: 'list week'
            }
        },

        defaultView: 'listWeek',
        defaultDate: '2017-05-12',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events        
    });

});