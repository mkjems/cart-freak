
function prepareDom(name) {
    $('#rootBox').html('');
    $('#rootBox').html($('#template-'+ name).html());
}

$(document).ready(function() {

    var cleanup = require('./cleanup');
    page.base('/game');

    page('/', function(){
        cleanup.runTodos();
        prepareDom('');
        require('./old')();
    });

    page('/play', function(){
        cleanup.runTodos();
        prepareDom('play');
        require('./play')();
    });

    page();

});
