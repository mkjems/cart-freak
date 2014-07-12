
exports.register = function(app){

    app.get('/lounge', function(req, res){
        require('./handlers/lounge').view(req,res);
    });
};
