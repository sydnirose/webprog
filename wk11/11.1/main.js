function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    angleMode(DEGREES);
}

function draw() {
    background('#1f2024');

    // rotates circle to oval
    rotateX(70)

    noFill()
    stroke(255)
    strokeWeight(2)

    for (var i = 0; i < 40; i++) {

        // change line color
        var r = map(sin(frameCount), -1, 1, 0, 255)
        var g = map(i, 0, 20, 0, 255)
        var b = map(cos(frameCount), -1, 1, 255, 0)

        stroke(r, g, b)

        // creation of circular shape
        beginShape() 
        for (var j= 0; j < 360; j += 5) {
            var rad = i * 22
            var x = rad * cos(j)
            var y = rad * sin(j)
            // adding z begins the up/down movement
            var z = sin(frameCount * 2 + i * 10) * 60

            vertex(x, y, z)
        }
        endShape(CLOSE)
    }
}

function mousePressed() {
    noLoop();
}

function mouseReleased() {
    loop();
}