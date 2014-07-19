    var socket = io.connect('http://cart-freak.com:3000/');

    socket.on('index world changed', function (data) {
        console.log('index world changed', data);
        ractive.set('conectionCount', data.connectionsCount);
        ractive.set('startingRaces', data.startingRaces);
        ractive.set('activeRaces', data.activeRaces);
        ractive.set('completedRaces', data.completedRaces);
        ractive.set('humansConnected', data.humansConnected);
    });

    var ractive = new Ractive({
        el: 'container',
        template: '#template',
        data: {
            conectionsCount: '0',
            startingRaces:['Starting 1'],
            activeRaces: ['Active 1'],
            completedRaces: ['Completed 1'],
            humansConnected: [{name:'human 1', lastMessage:'hello'}, {name:'human2', lastMessage:'dav'}]
        }
    });

    socket.on('index personal world changed', function (data) {
        console.log('index personal world changed', data);
        ractive.set('conectionCount', data.connectionsCount);
    });

    var ractivePersonal = new Ractive({
        el: 'container-personal',
        template: '#template-index-personal',
        data: {
            showSetName : true,
            showTypeSomething : false,
            yourNewName: 'Human 1',
            yourName:'Martin'
        }
    });

    $('#setName').click(function(){
        socket.emit('set name', {
            name:  $('input[name="yourNewName"]').val()
        });
        ractivePersonal.set('showSetName', false);
        ractivePersonal.set('showTypeSomething', true);
    });

    window.console.log('index done..');