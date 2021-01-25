const io = require('socket.io')()

io.on('connection', socket => {

  // all socket listener here
})

module.exports = io