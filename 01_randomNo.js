const r = require('raylib');

function setup() {
    const WIDTH = 800;
    const HEIGHT = 600;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, 'Random Number');
    r.SetTargetFPS(50);

    const lines = [];

    for (let i = 0; i < 100; i++) {
        lines.push(Math.random() * WIDTH);
    }

    return {
        WIDTH,
        HEIGHT,
        lines,
    };
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
