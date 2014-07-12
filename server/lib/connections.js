
/*
    An array of sockets to all visitors.
    Handles connect and disconnect.
*/

var connections = [],
    _ = require('lodash'),
    Connection = require('./Connection.js'),
    EventEmitter = require('events').EventEmitter;;

var serial=1;
function getConnectionSerialNo() {
    serial++;
    return serial;
}

function addConnection(connection) {
    connections.push(connection);
    console.log('Connection added!', connections.length);
}

function removeConnection(connection) {
    connections = _.without(connections, connection);
    console.log('Connection lost', connections.length);
}

function connectionsChanged(io) {
    events.emit('connectionsChanged', connections.length);
}

var events = new EventEmitter();

exports.setup = function(io){

    io.on('connection', function (socket) {

        // Create connection obj
        var connection = new Connection( getConnectionSerialNo(),socket, io);

        // Store it
        addConnection(connection);

        // Handle disconnect
        socket.on('disconnect', function(data){
            removeConnection(connection);
            // Tell everyone
            connectionsChanged(io);
        });

        // Tell everyone
        connectionsChanged(io);
    });

};

exports.events = events;
