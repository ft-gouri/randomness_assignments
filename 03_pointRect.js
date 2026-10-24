const r = require('raylib');

function setup() {
    const WIDTH = 800;
    const HEIGHT = 400;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, 'Random Circles');
    r.SetTargetFPS(50);

    return {
        WIDTH,
        HEIGHT,
        lines: createLines(WIDTH, HEIGHT),
    };
}

function createLines(width, height) {
    const x = [];
    const y = [];

    for (let i = 0; i < 300; i++) {
        x.push(Math.random() * width);
        y.push(Math.random() * height);
    }

    return { x: x, y: y };
}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.DARKBLUE);

    for (let i = 0; i < w.lines.x.length; i++) {
        const x = w.lines.x[i];
        const y = w.lines.y[i];
        r.DrawCircle(x, y, 10, { r: 255, g: 255, b: 255, a: 128 });
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
