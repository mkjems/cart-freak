
var express = require('express'),
    path = require('path'),
    app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.normalize( __dirname + '/../views/' ) ) ;


app.use(express.static(__dirname + './../www'));
require('./routes').register(app);

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

var io = require('socket.io')(server);

require('./connections').setup(io);

require('./loungeSupervisor').setup(io);
