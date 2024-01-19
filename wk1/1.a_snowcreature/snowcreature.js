let grid = undefined;
function setup() {
    createCanvas(1000, 800);
    background(154, 207, 245);
    grid = loadImage("images/100px_grid.png");
}
function draw() {
    background(grid);
    // snowcreature body
    fill("f1f1f1");
    stroke("white");
    strokeWeight(0);
    ellipse(500, 200, 175);
    ellipse(500, 380, 225);
    ellipse(500, 600, 275);
    // snowcreature right arm
    stroke(79, 60, 40);
    strokeWeight(20);
    line(585, 390, 700, 300);
    // snowcreature left arm
    stroke(79, 60, 40);
    strokeWeight(20);
    line(415, 390, 300, 300);
    // snowcreature eyes
    stroke(0);
    strokeWeight(49);
    point(465, 175);
    point(535, 175);
    // snowcreature mouth
    noFill();
    strokeWeight(10);
    arc(500, 225, 80, 80, 0, HALF_PI);
}