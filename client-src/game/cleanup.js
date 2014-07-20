
var todos = [],
    _ = require('./../libs/lodash');

exports.addTodo = function(callback, that, arg) {
    var args = Array.prototype.slice.call(arguments, 1);
    var todo = {
        callback : callback,
        args: args,
        that: that
    };
    todos.push(todo);
};

exports.runTodos = function() {
    _.each(todos, function(todo) {
        todo.callback(todo.that, todo.args);
    });
};

