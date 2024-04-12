var song;
var button;
var bg;
var fft;
var w;

var volhistory = [];

function setup() {
    createCanvas(500, 500);
    bg = loadImage('skyfall-image.png');
    song = loadSound("skyfall.m4a", loaded);
    button = createButton("play");
    button.mousePressed(togglePlaying);
    angleMode(DEGREES);
    fft = new p5.FFT(0.9, 128);
    w = width / 64;
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

// setting background of canvas as cover art
function draw() {
    background(bg);
    var spectrum = fft.analyze();
    // stroke(255, 255, 255, 100);
    noStroke();
    fill(255, 255, 255, 100)
    for (var i =0; i < spectrum.length; i++) {
        var amp = spectrum[i];
        var y = map(amp, 0, 255, height, 0);
        rect(i * w, y, w, height - y, 10);
    }
}

// tells console when song is ready for play
function loaded() {
    console.log("loaded");
}