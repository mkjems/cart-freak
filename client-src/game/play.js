
module.exports = function() {

    console.log('just playing...');
    require('./cleanup').addTodo(function(add1, add2){
        console.log('cleaning up play', add1, add2);
    }, this, 1, 2);
};