
var express = require('express');
var app = express();


app.use(express.static(__dirname + './../www'));
//app.engine('html', require('ejs').renderFile);


var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

var io = require('socket.io')(server);

// app.get('/', function(req, res){
//   res.send('Hello World');
//   console.log('hello');
// });

io.on('connection', function (socket) {

  socket.emit('news', { hello: 'world' });

  socket.on('my other event', function (data) {
    console.log(data);
  });

});