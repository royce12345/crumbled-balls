class Dustbin {
    constructor(x, y, width, height){
        var options = {
            isStatic: true,
            'restitution' :0,
            'friction' :1,
            'density' :0.1
        }
    this.body = bodies.rectangle(x, y, width, heigh, options);
    this.width = width;
    this.height = height;

    world.add(world, this.body);
    }
    display(){
        rectMode(center);

fill(255);

rect(this.body.positon.x, this.body.position.y, this.width, this.height,);
    }
};