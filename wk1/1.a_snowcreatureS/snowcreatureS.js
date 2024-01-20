let grid = undefined;
let stroke1 = prompt("enter a basic color name in lower case", "red");
let stroke2 = prompt("enter a basic color name in lower case", "white");
function setup() {
    createCanvas(1000, 800);
    background(151, 147, 250);
    grid = loadImage("/images/100px_grid.png");
}

function draw() {
    // background(grid);

    //snowy ground
    stroke(216, 215, 224);
    fill(216, 215, 224);
    rect(0, 725, 1000);

    //snow falling
    stroke(stroke2);
    strokeWeight(27);
    point(100, 100);
    point(300, 200);
    point(190, 400);
    point(40, 600);
    point(75, 300);
    point(445, 20);
    point(620, 75);
    point(800, 180);
    point(970, 70);
    point(740, 400);
    point(950, 320);
    point(988, 540);

    // snowcreature body
    fill("f1f1f1");
    stroke(30, 42, 71);
    strokeWeight(10);
    ellipse(500, 600, 275);
    ellipse(500, 380, 225);
    ellipse(500, 200, 175);
    // snowcreature right arm
    stroke(79, 60, 40);
    strokeWeight(20);
    line(585, 390, 700, 300);
    // snowcreature left arm
    stroke(79, 60, 40);
    strokeWeight(20);
    line(415, 390, 300, 300);
    // snowcreature eyes
    fill(0);
    noStroke();
    ellipse(465, 175, 40, 50);
    ellipse(535, 175, 40, 50);
    stroke(255);
    strokeWeight(30);
    point(465, 181);
    point(535, 181);
    stroke(0);
    strokeWeight(15);
    point(475, 185);
    point(545, 185);
    // snowcreature mouth
    noFill();
    strokeWeight(10);
    stroke(stroke1);
    arc(500, 225, 40, 40, 0, PI);

    //snowcreature baby 1
    //body
    fill("f1f1f1");
    stroke(30, 42, 71);
    strokeWeight(5);
    ellipse(200, 660, 150);
    ellipse(200, 550, 90);
    //eyes
    strokeWeight(20);
    point(180, 550);
    point(220, 550);
    // snowcreature mouth
    noFill();
    strokeWeight(7);
    stroke(stroke1);
    arc(200, 570, 10, 10, 0, PI);

    //snowcreature baby 2
    //body
    fill("f1f1f1");
    stroke(30, 42, 71);
    strokeWeight(5);
    ellipse(800, 660, 150);
    ellipse(800, 550, 90);
    //eyes
    strokeWeight(20);
    point(780, 550);
    point(820, 550);
    // snowcreature mouth
    noFill();
    strokeWeight(7);
    stroke(stroke1);
    arc(800, 570, 10, 10, 0, PI);
}