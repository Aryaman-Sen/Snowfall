var snow,snowI;
var snow2,snow2I
var crystal,crystalI

function setup() {
  createCanvas(800,400);

   snowI=loadImage("snow4.webp");
   snow2I= loadImage("snow2.jpg");

   crystalI=loadImage("snow5.webp");


   snow = createSprite(50, 200, 20, 20);
   snow.addImage(snowI);
   snow.scale=0.1;

   crystal=createSprite(400,200,20,20);
   crystal.addImage(crystalI);
   crystal.scale=0.1;

}

function draw() {
  background(snow2I);  


  
  drawSprites();
}