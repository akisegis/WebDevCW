function preload(){
    font1 = loadFont('assets/CourierPrime-Bold.ttf');
    font2 = loadFont('assets/PixelifySans-VariableFont_wght.ttf');
    font3 = loadFont('assets/Trispace-Regular.ttf');}

function setup(){
    createCanvas(800,400);
    background(0);
    canvas.parent('sketch-container');
}
  
  function draw() {
    push();
    translate(400,200);
    textFont(font2);
    textSize(80);
    textAlign(CENTER,CENTER);

    if(mouseY < 200){
    background(0);
    fill(255);
    text('Nothing',71.5,0);
    } else {
    background(0);
    fill(255,0,0);
    text('Everything',0,0);
    }
    pop();
}
