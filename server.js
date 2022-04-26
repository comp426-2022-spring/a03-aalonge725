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