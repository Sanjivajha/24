const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine,world,dustbin,paper;

function setup() {
	createCanvas(800, 400);
	rectMode(CENTER);
	

	dustbin = new DustBin(720,390,100,10);
    paper=new Paper(100,300,10);
	groound=Bodies.rectangle(width/ 2,400,width,10,
		{
			isStatic: true
		}
		);
	
		world.add(world,ground);
}


function draw() {
  background("black");
  rectMode(CENTER);
background(0);

dustbin.display();
paper.display();


  drawSprites();
 
}

function keyPressed() {
if(keyCode === up_ARROW){
	matter.Body.applyForce(paper.Body,paper.Body.position,{

		x:12,
		y:-13

	
	
		});
}
}



