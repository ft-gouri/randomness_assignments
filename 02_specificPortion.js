const r = require('raylib');

function setup() {
    const WIDTH = 800;
    const HEIGHT = 400;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, 'Specific Range');
    r.SetTargetFPS(50);

    return {
        WIDTH,
        HEIGHT,
        lines: createLines(),
    };
}
function createLines() {
    const lines = [];
    const minX = 250;
    const maxX = 500;

    for (let i = 0; i < 100; i++) {
        const x = minX + Math.random() * (maxX - minX);
        lines.push(x);
    }
    return lines;
}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    for (let i = 0; i < w.lines.length; i++) {
        const x = w.lines[i];
        r.DrawLine(x, 0, x, w.HEIGHT, r.WHITE);
    }

    r.EndDrawing();
}

function loop(w) {
    while (!r.WindowShouldClose()) {
        draw(w);
    }
}

function teardown() {
    r.CloseWindow();
}

function main() {
    const world = setup();
    loop(world);
    teardown();
}

main();
