
var a,b,c,d


function setup() {
  createCanvas(800,400);
  movingrect=createSprite(40, 200, 50, 50);
  fixedrect=createSprite(450, 200, 50, 50);

  a=createSprite(100,200,50,50)
  b=createSprite(200,200,50,50)
  c=createSprite(300,200,50,50)
  d=createSprite(400,200,50,50)
}

function draw() {
  background(0);  
  
  movingrect.x=mouseX
  movingrect.y=mouseY 
  
  if(isTouching(movingrect,c)){
    movingrect.shapeColor="green"
    c.shapeColor="green"
  }
  
  else{movingrect.shapeColor="red"
  c.shapeColor="red"}
 
 
  drawSprites();
}


function isTouching(ob1,ob2){

  if(ob1.x-ob2.x < ob1.width/2 + ob2.width/2 && 
    ob1.x-ob2.x < ob1.width/2 + ob2.width/2 &&
    ob1.y-ob2.y < ob1.height/2 + ob2.height/2 &&
    ob1.y-ob2.y < ob1.height/2 + ob2.height/2)
 {
return true
}
else {return false
} 
  



}



