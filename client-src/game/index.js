
$(document).ready(function() {

    page.base('/game');

    page('/', function(){
        require('./old');
    });

    page('/about', function(){

    });

    page();




    // $('.gotoAbout').click(function(e) {
    //     e.preventDefault();
    //     page('/about');
    // });


});
