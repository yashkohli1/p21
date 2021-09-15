var bullet, wall;
var speed, weight;
var thickness

function setup() {
  createCanvas(1600,400);

thickness =random(22,83)
  bullet= createSprite(50, 200, 50, 15);
  wall = createSprite (1200, 200, thickness, height/2);
  wall.shapeColor="yellow"

  speed=random(223,321);
  weight=random(30,52);

  bullet.velocityX = speed;
  
  
}

function draw() {

  background("black");  

  if (wall.x-bullet.x < (bullet.width+wall.width)/2) {
  bullet.velocityX=0;
  var deformation=(0.5 * weight * speed * speed)/(thickness*thickness*thickness)
  if (deformation>10) {
  wall.shapeColor = "red";
  }
  
  if (deformation<10) {
  wall.shapeColor = "green";
  }
} 



  drawSprites();
}