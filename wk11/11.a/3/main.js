let angle = 0;

function setup() {
    createCanvas(800, 600, WEBGL);
}

function draw() {
    background('#e7bff2');

    rectMode(CENTER);
    stroke('#c04ae0');
    fill('#e34dd9');
    translate(mouseX - width/2, mouseY -height/2);
    rotateX(angle);
    rotateY(angle * 0.3);
    rotateZ(angle * 1.0);
    torus(150, 20);

    angle += 0.07;
}