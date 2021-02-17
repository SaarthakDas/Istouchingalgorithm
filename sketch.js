var fixedRect;
var movingRect;



function setup() {
  //created the canvas/base for the game
  createCanvas(800,400);

  //created a fixed rect sprite
  fixedRect =createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="pink";
  fixedRect.debug = true;
 

  //created a moving rect sprite
  movingRect = createSprite(350,150,30,30);
  movingRect.shapeColor="blue"
  movingRect.debug= true;
}

function draw() {

  //gave color to the background and to clear the screen
  background("cyan");  

  //to move the moving rect along with the mouse
  movingRect.x= mouseX;
  movingRect.y=mouseY;

  if(movingRect.x- fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x- movingRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.y- movingRect.y< fixedRect.height/2 + movingRect.height/2
    && movingRect.y - fixedRect.y< fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor="black";
    movingRect.shapeColor="black";
  }
  else{
    fixedRect.shapeColor="pink";
    movingRect.shapeColor="blue";
  }

  //display the sprites
  drawSprites();
}