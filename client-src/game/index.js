
$(document).ready(function() {

    page.base('/game');
    page('/', index);
    page('/about', about);
    page('/contact', contact);
    page();

    function index() {

        document.querySelector('p')
        .textContent = 'viewing index';
    }

    function about() {
        document.querySelector('p')
        .textContent = 'viewing about';
    }

    function contact() {
        document.querySelector('p')
        .textContent = 'viewing contact';
    }

    $('.gotoAbout').click(function(e) {
        e.preventDefault();
        page('/about');
    });


});
