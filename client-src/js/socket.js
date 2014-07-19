var socket = io.connect('http://cart-freak.com:3000/');

socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
});

socket.on('message', function (data) {
    console.log(data);
    socket.emit('message', { Martin: 'work!' });

});