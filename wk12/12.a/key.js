function Key(id) {
    this.display = function() {
        noStroke();
        fill(color[id]);
        rect(xKey[id], 50, windowWidth/numKeys, windowHeight);
    }
    this.played = function() {
        if(mouseY > 50 && mouseX > xKey[id] && mouseX < (xKey[id] + (windowWidth/numKeys))) {
            polySynth.play(notes[id], 0.5, 0, 0.6);
        }
    }
}