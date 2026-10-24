const r = require('raylib');

const WIDTH = 800;
const HEIGHT = 600;
const RADIUS = 300;

r.SetTraceLogLevel(r.LOG_NONE);
r.InitWindow(WIDTH, HEIGHT, 'Random Points in a Circle');
r.SetTargetFPS(50);

const centerX = WIDTH / 6;
const centerY = HEIGHT / 6;

const points = [];

for (let i = 0; i < 500; i++) {
    const distance = Math.random() * RADIUS;
    const angle = Math.random() * Math.PI * 2;

    const x = centerX + distance * Math.cos(angle);
    const y = centerY + distance * Math.sin(angle);
    points.push({ x, y });
}

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.DARKBLUE);

    r.DrawCircleLines(centerX, centerY, RADIUS, r.WHITE);

    for (const point of points) {
        r.DrawCircle(point.x, point.y, 6, { r: 255, g: 203, b: 0, a: 150 });
    }

    r.EndDrawing();
}

r.CloseWindow();
