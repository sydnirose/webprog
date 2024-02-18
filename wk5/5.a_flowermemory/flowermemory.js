// variables
const DOWN = 'down';
const UP = 'up';
let startingX = 50;
let startingY = 50;
let cards = [];
const gameState = {

};
let cardfaceArray = [];
let cardback;

function preload() {
    cardback = loadImage('images/cardback.png');
    cardfaceArray = [
        loadImage('images/cardimg1.png'),
        loadImage('images/cardimg2.png'),
        loadImage('images/cardimg3.png'),
        loadImage('images/cardimg4.png'),
        loadImage('images/cardimg5.png'),
        loadImage('images/cardimg6.png'),
        loadImage('images/cardimg7.png'),
        loadImage('images/cardimg8.png'),
    ]
}

function setup() {
    createCanvas(700, 700);
    background('#cef2d4');
    let selectedFaces = [];
    for (let z = 0; z < 8; z++) {
        const randomIdx = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        cardfaceArray.splice(randomIdx, 1);
    }
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 4; i++) {
            const faceImage = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, faceImage));
            startingX += 150;
        }
        startingY += 150;
        startingX = 50;
    }
}

function mousePressed() {
    for (let k = 0; k < cards.length; k++) {
        if(cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[k]);
        }
    }
}

class Card {
    constructor (x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 140;
        this.height = 140;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.show();
    }

    show () {
        if(this.face === DOWN) {
            fill('#1b6627');
            noStroke();
            rect(this.x, this.y, this.width, this.height, 10);
            image(cardback, this.x, this.y); 
        } else {
            fill('#e074d6');
            noStroke();
            rect(this.x, this.y, this.width, this.height, 10);
            image(this.cardFaceImg, this.x, this.y);
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