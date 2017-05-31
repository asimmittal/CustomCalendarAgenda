var Interfake = require("interfake");
var portastic = require("portastic");


portastic.find({
    min: 3000,
    max: 8000
}).then(function(ports){
    
    if(ports.length > 0){
        var port = ports[0];
        var appServer = new Interfake();

        appServer.get("/name").status(200).body(getName());

        appServer.serveStatic("/","public");
        appServer.listen(port);
        console.log("--> listening on port",port);
    }
    else throw "Couldn't find an empty port to run this server";
});

function getName(){
    return {
        name: "Asim Mittal"
    }
}