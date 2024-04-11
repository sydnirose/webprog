var song;
var button;

function setup() {
    createCanvas(500, 500);
    song = loadSound("skyfall.m4a", loaded);
    button = createButton("play");
    button.mousePressed(togglePlaying);
    song.setVolume(0.5);
    background(0);
}

function togglePlaying() {
    song.play();
}

function loaded() {
    song.play();
}