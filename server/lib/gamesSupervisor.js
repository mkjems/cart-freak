
/*
    Holds all games being played.
    Creates and deletes games
*/

var games = [];

exports.getStartingRaces = function(){
    return ['Starting1', 'Start2'];
};

exports.getActiveRaces = function(){
    return ['Active 1', 'Active2']
};

exports.getCompletedRaces = function(){
    return ['Completed 1', 'comp2', 'comp3'];
};