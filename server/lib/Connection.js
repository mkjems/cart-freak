
var connections = require('./connections');

function Connection(serialNo, socket, io){
    this.serialNo = serialNo;
    this.socket = socket;
    this.io = io;

    connections.events.on('connectionsChanged', function(data){
        console.log('connectionsChanged', data);

        io.emit('index world changed', {
            connectionsCount: data
        });

    })
}

module.exports = Connection;
