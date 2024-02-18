// variables
const DOWN = 'down';
const UP = 'up';
let startingX = 50;
let startingY = 50;
let cards = [];
const gameState = {

};

function setup() {
    createCanvas(700, 700);
    background('#cef2d4')
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 4; i++) {
            cards.push(new Card(startingX, startingY));
            startingX += 150;
        }
        startingY += 150;
        startingX = 50;
    }
}

function mousePressed() {
    for (let k = 0; k < cards.length; k++) {
        if(cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped');
        }
    }
}

class Card {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.width = 140;
        this.height = 140;
        this.face = DOWN;
        this.show();
    }

    show () {
        if(this.face === DOWN) {
            fill('#1b6627');
            noStroke();
            rect(this.x, this.y, this.width, this.height, 10);
        } else {
            fill('#e074d6');
            noStroke();
            rect(this.x, this.y, this.width, this.height, 10);
        }
    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width &&
            mouseY >= this.y && mouseY <= this.y + this.height) {
                this.flip();
                return true;
            } else {
                return false;
            }
    }

    flip () {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}