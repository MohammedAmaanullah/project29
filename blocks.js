class Block{
    constructor(x,y,width,height){
        var options = {
            restitution : 0.4, 
            friction : 0
        }
        this.block = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.block);
    }
    display(){
        var pos = this.block.position;
        var angle = this.block.angle;
        push();
        translate(this.block.position.x, this.block.position.y);
        rotate(angle);
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
    }
}