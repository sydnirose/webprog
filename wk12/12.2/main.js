var song;
var button;
var bg;

function setup() {
    createCanvas(500, 500);
    bg = loadImage('skyfall-image.png');
    song = loadSound("skyfall.m4a", loaded);
    button = createButton("play");
    button.mousePressed(togglePlaying);
}

// setting background of canvas as cover art
function draw() {
    background(bg);
}

// creates play and pause ability
function togglePlaying() {
    if (!song.isPlaying()) {
        song.play();
        song.setVolume(0.5);
        button.html("pause");
    } else {
        song.pause();
        button.html("play");
    }
}

// tells console when song is ready for play
function loaded() {
    console.log("loaded");
}