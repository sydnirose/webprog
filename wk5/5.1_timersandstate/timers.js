// variables
let blockX = 0;
let blockY = 0;
let blockColor = 255;
let drawTimer;
const speed = 10;
const distance = 2;

// doc setup
function setup () {
    createCanvas(500, 500);
    background('#fde6ff');
}

// draw
function drawBlock(x, y, color) {
    fill(color || 255);
    noStroke();
    rect(x, y, 50, 50);
}

// interaction
function keyTyped() {
    let keyToNumber = Number(key);
    if (isNaN(keyToNumber)) {
        return;
    }
    keyToNumber = map(keyToNumber, 1, 9, 1, 255);
    console.log('converted number', keyToNumber);
    blockColor = keyToNumber;
}

// sets timing
window.setTimeout(() => {
    drawTimer = window.setInterval(() => {
        if (blockX - 50 <= width) {
            drawBlock(blockX, blockY, blockColor);
            blockX += distance;
        } else {
            blockX = 0;
            blockY += 50;
        }
        if (blockX - 50 > width && blockY - 50 > height) {
            window.clearInterval(drawTimer);
            alert('done');
        }
    
    }, speed)

}, 1500)