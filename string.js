/*class String{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.8,
            length: 8
        }
        this.sling = loadImage();
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling,200,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB; 
            push();
            stroke(51,34,18);       
        }
        if(pointA.x < 200){
            strokeWeight(6);
            line(pointA.x - 20,pointA.y,pointB.x-10, pointB.y);
            line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            image(this.sling,pointA.x - 30, pointA.y - 10, 15, 30);
        }
    else{
        strokeWeight(3);
        line(pointA.x +25 ,pointA.y, pointB.x - 10, pointB.y);
        line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
        image(this.sling, pointA.x +25, pointA.y - 10, 15, 30);
    }
    pop();
    }
}*/