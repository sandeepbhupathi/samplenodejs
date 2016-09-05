var express = require("express");

var app = express();

var port = process.env.PORT || 3000;

app.use("/static",express.static("static"));
app.use("/",express.static("static"));

app.get("/hello",function (request,response) {
    response.end("Hello World");
})
var webServer = app.listen(port, function () {
    console.log('Listening on port %d', webServer.address().port);
});