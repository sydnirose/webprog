function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background('#d8d8e3');
    noStroke();
    fill('#032363');

    // star 1
    push();
    translate(width * 0.8, height * 0.5);
    rotate(frameCount / 75);
    star(0, -100, 30, 70, 10);
    pop();

    // star 2
    push();
    translate(width * 0.8, height * 0.5);
    rotate(frameCount / 55);
    star(-100, 30, 30, 70, 10);
    pop();
    
    // star 3
    push();
    translate(width * 0.8, height * 0.5);
    rotate(frameCount / 105);
    star(-150, -100, 30, 70, 10);
    pop();

    // star 4
    push();
    translate(width * 0.8, height * 0.5);
    rotate(frameCount / 205);
    star(-200, 150, 30, 70, 10);
    pop();

    // star 5
    push();
    translate(width * 0.8, height * 0.5);
    rotate(frameCount / 95);
    star(20, 150, 30, 70, 10);
    pop();
}

// star shape
function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
        beginShape();
            for (let a = 0; a < TWO_PI; a += angle) {
                let sx = x + cos(a) * radius2;
                let sy = y + sin(a) * radius2;
                vertex(sx, sy);
                sx = x + cos(a + halfAngle) * radius1;
                sy = y + sin(a + halfAngle) * radius1;
                vertex(sx, sy);
            }
        endShape(CLOSE);
}