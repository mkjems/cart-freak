define(function (require, exports, module) {var h = require('./file2.js');
h.hello();

var socket = io.connect('http://cart-freak.com:3000');

socket.on('news', function (data) {

    console.log(data);

    socket.emit('my other event', { my: 'data' });

});


});
