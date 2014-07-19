
function Ball(x,y,radius, vector){
    this.x = x,
    this.y = y,
    this.radius = radius,
    this.vector = vector
}

Ball.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
};

Ball.prototype.erase = function(ctx) {
    ctx.clearRect (this.x - this.radius *2 , this.y - this.radius*2, this.radius * 4, this.radius*4 );
};

Ball.prototype.moveOneTick = function() {
    this.x += this.vector.x;
    this.y += this.vector.y;
};

module.exports = Ball;