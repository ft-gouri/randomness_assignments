const r = require('raylib');

function setup() {
    const WIDTH = 600;
    const HEIGHT = 400;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, 'Random Circles');
    r.SetTargetFPS(50);

    return {
        WIDTH,
        HEIGHT,
        lines: createLines(),
    };
}

function createLines() {
    const x = [];
    const y = [];

    const rectX = 150;
    const rectY = 100;
    const rectW = 300;
    const rectH = 200;

    for (let i = 0; i < 300; i++) {
        x.push(rectX + Math.random() * rectW);
        y.push(rectY + Math.random() * rectH);
    }

    return { x: x, y: y };
}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.DARKBLUE);

    for (let i = 0; i < w.lines.x.length; i++) {
        r.DrawCircle(w.lines.x[i], w.lines.y[i], 6, {
            r: 255,
            g: 255,
            b: 255,
            a: 128,
        });
    }

    r.DrawRectangleLines(150, 100, 300, 200, r.WHITE);

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
