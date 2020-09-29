var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(900, 400,80,30);
  movingRect.shapeColor = "purple";
  movingRect.debug = true;

  testRect = createSprite(200, 400,80,30);
  testRect.shapeColor = "blue";
  testRect.debug = true;

  movingRect.velocityX = -5;
  testRect.velocityX = 5;
}

function draw() {
  background(0,0,0);
  
  if(isTouching(testRect, movingRect)) {
    testRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "purple";
    testRect.shapeColor = "blue";
  }

  bounceOff(testRect, movingRect);  
    
  drawSprites();
}