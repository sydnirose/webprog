raindrops = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < width/10; i++) {
        raindrops[i] = new Raindrop();
    }
}

function draw() {
    background(201, 235, 255, 50);
    fill(194, 233, 255, 50);
    frameRate(20);
    for (let i = 0; i < raindrops.length; i++) {
        raindrops[i].fade();
        raindrops[i].show();
    }
}

function Raindrop() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.radius = random(0, 4);
    this.alpha = 10; 

    this.fade = function() {
        if (this.radius < 75) {
            this.radius += random(2, 15);
            this.alpha = map(this.radius, 0, 100, 160, 0);
            stroke(79, 153, 196, this.alpha)
        } else if (this.radius > 75) {
            this.x = random(0, width);
            this.y = random(0, height);
            this.radius = random(0, 4);
        }
    }

    this.show = function() {
        circle(this.x, this.y, this.radius);
    }
} 

function mouseClicked() {
    noLoop();
}

function doubleClicked() {
    loop();
}