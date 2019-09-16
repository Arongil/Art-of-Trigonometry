const seed = Math.random() * 1e6;

// f : R2 --> [0, 1] x [0, 1] x [0, 1] \in R3. In words, f takes a coordinate and gives a color.
function f(x, y) {
    var m = millis() + seed;
    return [
        Math.sin(x + m/5000) + 2*Math.sin(m/2000 + (x - Math.sin(m/4000)*3)*(y - Math.cos(m/3000 - 1)*2)*Math.sin(m/2000)*2),
        Math.cos(x + m/13000) + Math.sqrt(Math.exp(0.5*Math.sin(x - y + m/2000) + 4*Math.sin(Math.sin(m/1400)*(x-Math.sin(m/5000)) * Math.sin(m/2200)*(y - Math.cos(m/3500 - 1)) * Math.sin(m/2000)*4))),
        Math.cos(x * y + m/7000) + 2*Math.cos((x - 2*Math.sin(m/1400))*(y - 2*Math.sin(1 + m/900))*Math.cos(m/2000)*4)
    ];
}

function sigmoid(x) {
    return 1 / (1 + Math.exp(-5*x));
}

function drawGrid(rows) {
    var row, col, color;
    const size = WIDTH/rows;
    for (row = 0.5; row < rows; row++) {
        for (col = 0.5; col < rows; col++) {
            color = f(row/rows, col/rows);
            fill(255*sigmoid(color[0]), 255*sigmoid(color[1]), 255*sigmoid(color[2]));
            rect(-HALFWIDTH + row*size, -HALFHEIGHT + col*size, size, size);
        }
    }
}

function draw() {
    drawGrid(40);
}
