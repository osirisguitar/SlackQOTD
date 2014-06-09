Slack bot for quote of the day from text file.

1. Prepare text file

Place a file called quotes.txt containing multi-line quotes separated by a completely blank line (\r\n or \n) into the working directory.

2. Encrypt the quote file:

$> ENCRYPTION_KEY=mykey node encryptQuoteFile.js

3. Include encrypted_quotes.dat in your deploy

4. Make sure ENCRYPTION_KEY is set to the same value in production that you used to prepare the file

5. POST to / to get a random quote.

Why encrypt the quote file? Well you might have sensitive data in there that you don't want on Github. Or you just don't want your users to ruin the fun by reading the quote file directly.