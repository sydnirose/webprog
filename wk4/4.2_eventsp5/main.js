// animation
let rectX = 0;
const rectHeight = 75;
let rectY;
const rectWidth = 75;

// track clicks
let clickCount = 0;

// speed setting
let speed;

// canvas
function setup () {
    createCanvas(500, 500);
    rectY = random(height - rectHeight);
    speed = random(1, 3);
} 

// draw, no loop
function draw () {
    background('#87b5ff');
    drawShape();
    rectX+= speed;
    if(rectX > width) {
        noLoop();
        text('Nice! Your score is ' + clickCount, 200, 250);
    }
}

// hit function, click count
function mousePressed() {
    if((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
        clickCount++;
        console.log('hit', clickCount);
    }
}

// shapes
function drawShape () {
    fill('#072e6b');
    noStroke();
    rect(rectX, rectY, rectWidth, rectHeight);
}