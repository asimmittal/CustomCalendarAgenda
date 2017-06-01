var Interfake = require("interfake");
var portastic = require("portastic");
var EventFaker = require("./fakeEvents");

var eventGen = new EventFaker();

portastic.find({
    min: 3000,
    max: 8000
}).then(function (ports) {

    if (ports.length > 0) {
        var port = ports[0];
        var appServer = new Interfake();

        appServer.get("/events").status(200).body(eventGen.getFakeEvents());

        appServer.serveStatic("/", "public");
        appServer.listen(port);
        console.log("--> listening on port", port);
    } else throw "Couldn't find an empty port to run this server";
});



