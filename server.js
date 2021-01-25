const server = require('./socketConfig')
const http = require('./bin/http')
server.attach(http)

// nodemon server.js