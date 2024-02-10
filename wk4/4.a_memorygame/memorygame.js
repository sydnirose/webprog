let startingX = 25;
let startingY = 25;
let cardWidth = 140;
let cardHeight = 140;

function setup() {
    createCanvas(650, 650);
    background('lightblue');
}

function draw() {
    noLoop();

    // make 4 rows of 4
    // outer loop handles rows
    for(let rows = 0; rows < 4; rows++) {
        
        // inner loop handles columns
        for(let columns = 0; columns < 4; columns++) {
            console.log(startingX, startingY)
            rect(startingX, startingY, cardWidth, cardHeight);
            // every iteration, move startingX by 150
            startingX += 150; 
        }
        startingY += 150;
        startingX = 25; 
    }
}