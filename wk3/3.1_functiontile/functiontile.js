function setup() {
    createCanvas(200, 200);
}
function createTile() {
    translate(0, 0);
    fill(43, 49, 92);
    rect(0, 0, 200, 200);

    fill(119, 130, 209);
    noStroke();
    circle(100, 100, 85);
    
    fill(103, 114, 194);
    noStroke();
    circle(100, 100, 70);

    stroke(54, 62, 117);
    strokeWeight(4);
    line(0, 100, 100, 0);
    line(100, 0, 200, 100);
    line(0, 100, 100, 200);
    line(100, 200, 200, 100);

    fill(160, 170, 232);
    noStroke();
    circle(25, 30, 40);
    circle(175, 30, 40);
    circle(25, 170, 40);
    circle(175, 170, 40);

    fill(115, 125, 186);
    stroke(54, 62, 117);
    strokeWeight(4);
    circle(35, 25, 30);
    circle(165, 25, 30);
    circle(35, 175, 30);
    circle(165, 175, 30);
}

function draw() {
    createTile();
}