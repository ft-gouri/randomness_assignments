const r = require('raylib');

function setup() {
    const WIDTH = 400;
    const HEIGHT = 400;
    let x = 0;
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, 'font');
    r.SetTargetFPS(50);

    return {
        WIDTH,
        HEIGHT,
        x,
    };
}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawText('Hello', w.x, 50, 80, r.YELLOW);
    // r.DrawText('Raylib', 50, 80, 30, r.YELLOW);
    w.x++;
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
