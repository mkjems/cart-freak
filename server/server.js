
var express = require('express');
var app = express();

// app.get('/', function(req, res){
//   res.send('Hello World');
//   console.log('hello');
// });

app.use(express.static(__dirname + '/www'));
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});