$(document).ready(function() {
    var socket = io.connect('http://cart-freak.com:3000/');

    socket.on('index world changed', function (data) {
        //console.log('connections changed', data);
        ractive.set('conectionCount', data.connectionsCount);
    });

    var ractive = new Ractive({
        // The `el` option can be a node, an ID, or a CSS selector.
        el: 'container',

        // We could pass in a string, but for the sake of convenience
        // we're passing the ID of the <script> tag above.
        template: '#template',

        // Here, we're passing in some initial data
        data: {
            conectionsCount: '0',
            startingRaces:['Starting 1'],
            activeRaces: ['Active 1'],
            completedRaces: ['Completed 1']
        }
    });

    window.console.log('index done..');
});