var FakeEventGen = function () {
    
    this.getFakeEvents = function () {
        var start = new Date(2000, 0, 1);
        var end = new Date();
        var dates = getDatesBetween(start, end);
        var _events = [];

        for (var i in dates) {

            var rnd = Math.random();
            if (rnd > 0.5) continue;

            var _startTime = new Date(dates[i]);
            var _endTime = new Date(dates[i]);

            _startTime.setHours(13);
            _startTime.setMinutes(25);
            _endTime.setHours(16);
            _endTime.setMinutes(40);

            _events.push({
                title: 'Sample Title\n(Conference room)',
                start: _startTime,
                end: _endTime,
            });
        }

        return {
            events: _events
        }
    }
}

//some date creation helpers
Date.prototype.addDays = function (days) {
    var dat = new Date(this.valueOf())
    dat.setDate(dat.getDate() + days);
    return dat;
}

function getDatesBetween(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(currentDate)
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}


module.exports = FakeEventGen;
