var seaimg(400,400);
seaimg= loadImage("sea.png");
var ship(150,20,10,10);
ship= loadImage("ship-1","ship-2","ship-3","ship-4");


function preload(){

}


function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
    drawSprites();

 
if(sea.x < 0){

  sea.x = seawidth/2;
}

}
