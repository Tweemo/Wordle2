const express = require('express')
const hbs = require('express-handlebars')

const routes = require('./routes')

const server = express()

// Middleware
// Server Config
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// HandleBars Config
server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))

// Routes

server.use('/', routes)

module.exports = server
