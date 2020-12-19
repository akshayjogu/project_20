var car, wall;
var speed, weight;

function setup() {
  createCanvas(1200,400);
  car = createSprite(50, 200, 20, 20);
  car.shapeColor="white";

  wall = createSprite(1150, 200, 20, 100);
  wall.shapeColor="black";

  speed=random(55, 90);
  weight=random(400, 1500);

  car.velocityX=speed;
}

function draw() {
  background("blue"); 
  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation =0.5*weight*speed*speed/22509;

    if(deformation>180){
      car.shapeColor="red";
    }
    else if(deformation<180 && deformation>100){
      car.shapeColor="yellow";
    }
    else{
      car.shapeColor="green";
    }
  }
  
  drawSprites();
}