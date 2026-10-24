const r = require('raylib');

const WIDTH = 800;
const HEIGHT = 600;

r.SetTraceLogLevel(r.LOG_NONE);
r.InitWindow(WIDTH, HEIGHT, 'Random Parallelogram');
r.SetTargetFPS(50);

// Starting corner A
const x = 200;
const y = 400;

// Side vectors AB and AD
const ax = 300;
const ay = 0;

const bx = 100;
const by = -200;

const points = [];

for (let i = 0; i < 500; i++) {
    const u = Math.random();
    const v = Math.random();

    const px = x + u * ax + v * bx;
    const py = y + u * ay + v * by;

    points.push({ x: px, y: py });
}

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.DARKBLUE);

    // Draw the four corners
    r.DrawLine(x, y, x + ax, y + ay, r.WHITE);
    r.DrawLine(x, y, x + bx, y + by, r.WHITE);
    r.DrawLine(x + ax, y + ay, x + ax + bx, y + ay + by, r.WHITE);
    r.DrawLine(x + bx, y + by, x + ax + bx, y + ay + by, r.WHITE);

    // Draw random points
    for (const p of points) {
        r.DrawCircle(p.x, p.y, 6, { r: 255, g: 203, b: 0, a: 128 });
    }

    r.EndDrawing();
}

r.CloseWindow();
