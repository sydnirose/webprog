// variables
let bubble1;
let bubble2;
let bubble3;
let bubble4;
let bubble5;
let bubble6;

let bubbles = [];
let numBubbles = 18;

function setup() {
    createCanvas(600, 600);
    bubble1 = new Bubble();
    bubble2 = new Bubble();
    bubble3 = new Bubble();
    bubble4 = new Bubble();
    bubble5 = new Bubble();
    bubble6 = new Bubble();

    for(let i = 0;i<numBubbles; i++) {
        bubbles[i] = new Bubble();
    }
}

function draw() {
    background('#112063');

    for(let i = 0; i<bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}

class Bubble {
    constructor() {
        this.x = 300;
        this.y = 300;
    }

    move() {
        this.x = this.x + random(-10, 10);
        this.y = this.y + random(-10, 10);
    }

    show() {
        stroke('#fcfbe6');
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, 44, 44);
        stroke('#fffdd6');
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, 54, 54);
        stroke('#fffba1');
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, 64, 64);
    }
}





// show() {
//     stroke('white');
//     strokeWeight(4);
//     noFill();
//     ellipse(this.x, this.y, 44, 44);
// }