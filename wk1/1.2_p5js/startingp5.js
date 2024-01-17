function setup() {
    createCanvas(windowWidth, windowHeight);
}
function draw () {
    if (mouseIsPressed) {
        fill(219, 160, 222);
    } else {
        fill(160, 222, 171);
    }
    ellipse(mouseX, mouseY, 80, 80);
    stroke(190, 222, 250);
}