var bk;

function preload(){
bk=loadImage("tower.png");
ninjaImg=loadImage("ninja.png");
}

function setup(){
  createCanvas(600,600);

  tower=createSprite(300,300,400,400);
  tower.addImage(bk);
  tower.velocityY=2
 
  ninja=createSprite(300,400,20,20);
  ninja.addImage(ninjaImg);
  ninja.scale=0.2
  
  ground=createSprite(300,595,600,10);
  ground.shapeColor="black";
}

function draw(){
  background(0);
 
  if(keyDown(LEFT_ARROW) && ninja.x>90){
    ninja.x -=10;
  }
  if(keyDown(RIGHT_ARROW) && ninja.x<500){
    ninja.x +=10;
  }
if(keyDown(UP_ARROW) ){
  ninja.velocityY=-10;
}
ninja.velocityY=ninja.velocityY+0.5

    if(tower.y>400){
      tower.y=300;
    }

   ninja.collide(ground)
    drawSprites();
    textSize(20);
    fill("red");
    stroke("black")
  text("NINJA RUN",5,30)
  }

