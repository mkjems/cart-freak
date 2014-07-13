
var connections = require('./connections');

function Connection(serialNo, socket, io){
    this.serialNo = serialNo;
    this.socket = socket;
    this.io = io;
    this.name = 'Human ' + this.serialNo;
    this.lastMessage = 'Hmm..';
    var that = this;
    socket.on('set name', function(data){
        console.log('set name', data, that.serialNo);
        that.name = data.name;
        connections.events.emit('connectionsChanged', data);
    });
}

module.exports = Connection;
