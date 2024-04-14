let numKeys = 5;
let keys = [];
let xKey = [];
let color = ['#daf0df', '#bdd9c4', '#91c29d', '#6fad7e', '#488a58'];
let polySynth;
let notes = [349.23, 415.30, 466.16, 523.25, 622.25, 698.46];

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < numKeys; i++) {
        let w = windowWidth/numKeys;
        let x = w * i;
        xKey.push(x);
    }

    // creates and displays 5 green bars
    for (let i = 0; i < numKeys; i++) {
        keys.push(new Key(i));
        keys[i].display();
    }

    // sets sound
    polySynth = new p5.PolySynth();
    polySynth.setADSR(0.1, 0.4, 0.3, 0.05);


}

function draw() {

}

// plays sound with click
function mousePressed() {
    userStartAudio();
    for(let i = 0; i < numKeys; i++) {
        keys[i].played();
    }
}