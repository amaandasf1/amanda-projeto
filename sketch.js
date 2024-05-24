function setup() {
  createCanvas(600, 600);
  background ("black")
}

function draw() {
  
  stroke("white");
  fill("purple");
  
 if(mouseIsPressed) {
   circle(mouseX, mouseY, 200, 350);
 }
}