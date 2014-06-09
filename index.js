var express = require('express');
var app = express();

app.get("/", function(req, res) {
	res.send("There will be a quote here!");
});

var port = process.env.PORT || 4321;
console.log("Listening to", port);

app.listen(port);