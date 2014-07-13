
var connections = require('./connections');
var gamesSupervisor = require('./gamesSupervisor');

exports.setup = function(io){

    connections.events.on('connectionsChanged', function(data){
        io.emit('index world changed', {
            connectionsCount: connections.getCount(),
            startingRaces: gamesSupervisor.getStartingRaces(),
            activeRaces: gamesSupervisor.getActiveRaces(),
            completedRaces: gamesSupervisor.getCompletedRaces(),
            humansConnected: connections.getHumansConnected()
        });
    });

}