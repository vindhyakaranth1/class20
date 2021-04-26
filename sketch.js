var fixrec,movrec


function setup() {
  createCanvas(1200,800);
  fixrec=createSprite(600,400,50,80);
  fixrec.shapeColor = "green";
  fixrec.debug = true;


  movrec=createSprite(400,200,80,30);
  movrec.shapeColor = "green";
  movrec.debug = true;
}

function draw() {
  background(0); 
  console.log(movrec.x-fixrec.x);
  movrec.x = World.mouseX;
  movrec.y = World.mouseY;

if (movrec.x-fixrec.x<fixrec.width/2+ movrec.width/2 && fixrec.x-movrec.x<fixrec.width/2+ movrec.width/2 
 && movrec.y-fixrec.y<fixrec.height/2+ movrec.height/2 && fixrec.y-movrec.y<fixrec.height/2+ movrec.height/2 ){
  movrec.shapeColor = "red";
  fixrec.shapeColor = "red";
}
else {
  movrec.shapeColor = "green";
  fixrec.shapeColor = "green";
}




  drawSprites();

}

