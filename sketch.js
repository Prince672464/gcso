var car,wall;
var speed,weight,rating;
var state="start";
var state="running"; 
var notformation;

function setup() {
  createCanvas(1600,400);

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);

  car = createSprite(50,200,50,50);
}

function draw() {
  background("black");  

  if(state==="start") {
    fill("blue");
    textSize(20);
  

  

    if(keyDown("G")) {
      state="running";
    }
  }

  if(state==="running") {
    weight = Math.round(random(400,2500));
    speed = Math.round(random(55,70));
    car.velocityX = speed;

  if(wall.x-car.x<wall.width/2+car.width/2) {
    car.velocityX=0;
    notformation = Math.round(0.5*weight*speed*speed/22500);
     
    if(notformation>=180) {
    car.shapeColor=color(255,0,0);
  
    }

    if(notformation<180 && notformation>=80) {
      car.shapeColor=color(230,230,0);
    
    }

    if(notformation<80) {
      car.shapeColor=color(0,255,0);
    }

    state="end";
  }
}

  if(state==="end") {

    if(notformation>=180) {
      fill(255,0,0);
    }

    if(notformation<180 && notformation>=80) {
      fill(230,230,0);
    }

    if(notformation<80) {
      fill(0,255,0);
    }

    



  
    if(keyDown("G")) {
      reset();
    }
  }

  drawSprites();
}


function reset() {
  state="pre";
  car.x=50;
  car.shapeColor=color(127,127,127);

}
