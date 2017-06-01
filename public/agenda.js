var EreCalendar = function (elemId, urlLoaderImage) {

    //initialize the calendar
    if (!document.getElementById(elemId)) throw "Cannot render calendar to invalid DOM element";
    if (urlLoaderImage && typeof(urlLoaderImage) != typeof('')) throw "URLimage must be a string";

    var handle = '#' + elemId;    
    var overlay;

    $(handle).fullCalendar({
        header: {
            left: 'prev,next',
            center: 'title',
            right: 'today' //'listDay,listWeek,month'
        },
        defaultView: 'listWeek',
        defaultDate: '2017-05-12',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events        
        events: []
    });

    this.addEvent = function (eventObj) {
        $(handle).fullCalendar('renderEvent', eventObj, true);
    }

    this.addEvents = function (eventList) {
        $(handle).fullCalendar('renderEvents', eventList, true);
    }

    this.showLoader = function(){
        overlay = document.createElement("div");
        overlay.className = "overlay";
        
        var spinner = document.createElement("div");
        spinner.className = "spinner";
        if(urlLoaderImage) {
            spinner.style.backgroundImage = urlLoaderImage;
            spinner.style.backgroundSize = 'contain';
            spinner.style.backgroundRepeat = 'no-repeat';
        }

        overlay.appendChild(spinner);        

        $(handle)[0].appendChild(overlay);

        var marginTop = parseInt($(".fc-toolbar").css("margin-top"));
        var marginBot = parseInt($(".fc-toolbar").css("margin-bottom"));
        var totalHeight = $(".fc-list-empty").outerHeight() + $(".fc-toolbar").outerHeight() + marginTop + marginBot;        
        $(handle).css("min-height",totalHeight);
    }

    this.hideLoader = function(){
        $(handle)[0].removeChild(overlay);
    }
}