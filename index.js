var express = require('express');
var fs = require('fs');
var crypto = require('crypto');

var key = process.env.ENCRYPTION_KEY;

var app = express();

var readQuotes = function() {
	var encryptedFile = fs.readFileSync('./encrypted_quotes.dat');

	var decipher = crypto.createDecipher('aes192', key);
	var quoteFile = decipher.update(encryptedFile, 'binary');

	var quoteArray = quoteFile.toString('utf8').replace(/\r\n/gm, '\n').split('\n\n');

	return quoteArray;
};

var getQuote = function(quotes) {
	if (quotes) {
		var lines = quotes.length;
		var randomEntryIndex = Math.floor(Math.random() * lines);
		console.log("Returning quote", randomEntryIndex, "out of", lines);
		return quotes[randomEntryIndex].replace(/\n/gm, "<br>");
	} else {
		return "Quote file could not be read. I'll be back";
	}
};

var quotes = null;

app.get("/", function(req, res) {
	if (!quotes) {
		quotes = readQuotes();
	}

	var quote = getQuote(quotes);
	res.send(quote);
});

var port = process.env.PORT || 4321;
console.log("Listening to", port);

app.listen(port);