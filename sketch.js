const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;
var polygon;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,300,800,20)
    block1 = new Block(200,250,40,40);


function draw(){
    background("black")
    Engine.update(engine);
    strokeWeight(4);
    
    ground.display();
    block1.display();
   
}

function mouseDragged(){
    
}


function mouseReleased(){
    
}
}
