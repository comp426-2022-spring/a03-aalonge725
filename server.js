// Require Express.js
const express = require('express')
const app = express()
const args = require('minimist')(process.argv.slice(2))
const coin = require("./modules/coin.js")

// Start an app server
args["port"]
const port = args.port || process.env.PORT || 5000
const server = app.listen(port, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%', port))
});

app.get('/app/', (req, res) => {
    // Respond with status 200
	res.statusCode = 200;
    // Respond with status message "OK"
    res.statusMessage = 'OK';
    res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
    res.end(res.statusCode+ ' ' +res.statusMessage)
});

app.get('/app/flip/', (req, res) => {
    let result = {'flip': coin.coinFlip()}
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.set('Content-Type', 'text/json');
    res.json(result);
});

app.get('/app/flips/:number', (req, res) => {
	let raw = coin.coinFlips(req.params.number)
    let summary = coin.countFlips(raw)
    let result = {'raw': raw, 'summary': summary}
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.set('Content-Type', 'text/json');
    res.json(result);
});

app.get('/app/flip/call/heads', (req, res) => {
    let result = coin.flipACoin('heads')
    res.statusCode = 200;
    res.statusMessage = 200;
    res.set('Content-Type', 'test/json');
    res.json(result);
});

// Default response for any other request
app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
});