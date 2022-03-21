var box
function setup() {
  createCanvas(400,400);
  box = createSprite(200,350,10,10)
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    box.x = box.x + 4
  }
  if(keyIsDown(LEFT_ARROW)){
    box.x = box.x - 4
  }
  if(keyIsDown(UP_ARROW)){
    box.y = box.y - 4
  }
  if(keyIsDown(DOWN_ARROW)){
    box.y = box.y + 4
  }
background("red")
//write the code to change background color
//to red when RIGHT_ARROW is pressed
drawSprites()
}




