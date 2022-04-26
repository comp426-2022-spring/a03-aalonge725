// Require Express.js
const express = require('express')
const app = express()
const args = require('minimist')(process.argv.slices(2))
const coin = require("./modules/coin.js")