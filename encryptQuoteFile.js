// Run this before deploying!
var encryptor = require('file-encryptor');

var key = process.env.ENCRYPTION_KEY;

// Encrypt file.
encryptor.encryptFile('quotes.txt', 'encrypted_quotes.dat', key, function(err) {
	console.log("File successfully encrypted!");
});
