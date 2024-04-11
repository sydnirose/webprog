function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    noFill();
}

function draw() {
    background('#68736b');
    rotateY(PI / 6);
    stroke('#bbc7be');
    box(35);
    let rad = millis() / 1000;

    // rotation of angles
    let ct = cos(rad);
    let st = sin(rad);

    // rotation of matrix
    applyMatrix(
        ct, 0.0, st, 0.0, 0.0, 1.0, 0.0, 0.0, -st, 0.0, ct, 0.0, 0.0, 0.0, 0.0, 1.0
    );
    stroke('');
    box(80);

    applyMatrix(
        ct, 2.0, st, 0.0, 0.0, 1.0, 0.0, 0.0, -st, 0.0, ct, 0.0, 0.0, 0.0, 0.0, 1.0
    );
    stroke('#3dffb1');
    box(200);

    applyMatrix(
        ct, 0.0, st, 0.0, 0.0, 1.0, 10.0, 0.0, -st, 0.0, ct, 0.0, 0.0, 0.0, 0.0, 1.0
    );
    stroke('#fc44e7');
    box(50);

    applyMatrix(
        ct, 6.0, st, 0.0, 8.0, 1.0, 0.0, 0.0, -st, 0.0, ct, 0.0, 0.0, 0.0, 0.0, 1.0
    );
    stroke('');
    box(50);
}