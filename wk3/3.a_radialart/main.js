let rotateBy = 5;

function setup() {
    createCanvas(600, 600,);
    background('#201f40');
    angleMode(DEGREES);
}

function makeArm(rotateBy, bezierColor, ovalColor, circleColor) {
    let alt = Math.round(rotateBy / 360);
    console.log(alt);

    //bezier shape
    noFill();
    stroke(bezierColor);
    strokeWeight(.5);
    bezier(0, 10 / 4, 10, 10, 160, 90, 50, 80 * 2);

    //oval shape
    noFill();
    stroke(ovalColor);
    strokeWeight(2);
    ellipse(150, 75, 100, 150);

    //circle shape
    noFill();
    stroke(circleColor);
    strokeWeight(1);
    ellipse(200, 100, 10 * alt);
}

function draw() {
    translate(300, 300);
    rotate(rotateBy);
    makeArm(rotateBy, '#ffd6f5', '#faffad', '#fc4475');
    rotateBy +=5;
}

function mousePressed() {
    noLoop();
}