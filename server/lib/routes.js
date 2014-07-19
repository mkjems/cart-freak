
exports.register = function(app){

    app.get('/', function(req, res){
        require('./handlers/handler').view(req,res);
    });

    app.get(['/game', '/game*'], function(req, res, next){

        res.format({
            html: function(){
                console.log('html');
                require('./handlers/game/handler').view(req,res);
            }
        });

    });
};
