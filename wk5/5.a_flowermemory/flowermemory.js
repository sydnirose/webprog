// variables
const DOWN = 'down';
const UP = 'up';
let startingX = 50;
let startingY = 50;
let cards = [];
const gameState = {
    totalPairs: 8, 
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
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
    createCanvas(700, 900);
    let selectedFaces = [];
    for (let z = 0; z < 8; z++) {
        const randomIdx = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        cardfaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
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

function draw() {
    background('#f5ecd0');
    if (gameState.numMatch === gameState.totalPairs) {
        fill('green');
        textSize(66);
        text('You win!!', 400, 425);
        noLoop();
    }
    for (let l = 0; l < cards.length; l++) {
        if(!cards[l].isMatch) {
            cards[l].face = DOWN;
        }
        cards[l].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill('#756046');
    textSize(36);
    text('Attempts ' + gameState.attempts, 50, 750);
    text('Matches ' + gameState.numMatched, 50, 700);
}

function mousePressed() {
    if (gameState.waiting) {
        return;
    }
    for (let k = 0; k < cards.length; k++) {
        if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
    }
    if (gameState.flippedCards.length === 2) {
        if (gameState.flippedCards[0].faceImage === gameState.flippedCards[1].faceImage) {
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            gameState.flippedCards.length = 0;
            gameState.numMatched++;
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000)
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
        this.isMatch = false;
        this.show();
    }

    show () {
        if(this.face === UP || this.isMatch) {
            fill('#e074d6');
            noStroke();
            rect(this.x, this.y, this.width, this.height, 10);
            image(this.cardFaceImg, this.x, this.y);
        } else {
            fill('#1b6627');
            noStroke();
            rect(this.x, this.y, this.width, this.height, 10);
            image(cardback, this.x, this.y); 
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

function shuffleArray (array) {
    let counter=array.length;
    while (counter > 0) {
        const idx = Math.floor(Math.random() * counter);
        counter--;
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}