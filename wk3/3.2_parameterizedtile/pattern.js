function setup() {
    createCanvas(600, 600);
}
function createTile(originX, originY, primaryColor, lineColor, outerCenter, centerCircle, largerCircle, smallerCircle) {
    translate(originX, originY);

    // fill(43, 49, 92);
    fill(primaryColor);
    rect(0, 0, 200, 200);

    // stroke(54, 62, 117);
    stroke(lineColor);
    strokeWeight(4);
    line(0, 100, 100, 0);
    line(100, 0, 200, 100);
    line(0, 100, 100, 200);
    line(100, 200, 200, 100);

    // fill(119, 130, 209);
    fill(outerCenter);
    noStroke();
    circle(100, 100, 85);
    
    // fill(103, 114, 194);
    fill(centerCircle);
    noStroke();
    circle(100, 100, 70);

    // fill(160, 170, 232);
    fill(largerCircle);
    noStroke();
    circle(25, 30, 40);
    circle(175, 30, 40);
    circle(25, 170, 40);
    circle(175, 170, 40);

    // fill(115, 125, 186);
    fill(smallerCircle);
    stroke(lineColor);
    strokeWeight(4);
    circle(35, 25, 30);
    circle(165, 25, 30);
    circle(35, 175, 30);
    circle(165, 175, 30);
}

function draw() {
    createTile(0, 0, '#2b315c', '#363e75', '#7782d1', '#6772c2', '#a0aae8', '#737dba');
    createTile(0, 200, '#730f56', '#851d66', '#d645ab', '#b83b93', '#ff96e0', '#bf67a5');
    createTile(0, 200, '#2b315c', '#363e75', '#7782d1', '#6772c2', '#a0aae8', '#737dba');
    createTile(200, -400, '#730f56', '#851d66', '#d645ab', '#b83b93', '#ff96e0', '#bf67a5');
    createTile(0, 200, '#2b315c', '#363e75', '#7782d1', '#6772c2', '#a0aae8', '#737dba');
    createTile(0, 200, '#730f56', '#851d66', '#d645ab', '#b83b93', '#ff96e0', '#bf67a5');
    createTile(200, -400, '#2b315c', '#363e75', '#7782d1', '#6772c2', '#a0aae8', '#737dba');
    createTile(0, 200, '#730f56', '#851d66', '#d645ab', '#b83b93', '#ff96e0', '#bf67a5');
    createTile(0, 200, '#2b315c', '#363e75', '#7782d1', '#6772c2', '#a0aae8', '#737dba');
}