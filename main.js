function millis() {
    return Date.now() - start;
}

function resize() {
    ctx.translate(-HALFWIDTH, -HALFHEIGHT);

    canvas.width = 4/5 * window.innerWidth;
    canvas.height = canvas.width;
    if (canvas.height > 98/100 * window.innerHeight) {
        // If the height is greater than the height of the screen, set it accordingly.
        canvas.height = 98/100 * window.innerHeight;
        canvas.width = canvas.height;
    }

    WIDTH = canvas.width;
    HEIGHT = canvas.height;
    HALFWIDTH = WIDTH / 2;
    HALFHEIGHT = HEIGHT / 2;

    ctx.translate(HALFWIDTH, HALFHEIGHT);
}

function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    WIDTH = 4/5 * window.innerWidth;
    HEIGHT = WIDTH;
    HALFWIDTH = WIDTH / 2;
    HALFHEIGHT = HEIGHT / 2;

    ctx.translate(HALFWIDTH + 0.5, HALFHEIGHT + 0.5);

    start = Date.now();

    var body = document.getElementsByTagName("body")[0];
    body.onresize = resize;
    resize();

    window.requestAnimationFrame(loop);
}

function loop() {
    draw();

    window.requestAnimationFrame(loop);
}

window.onload = init;
