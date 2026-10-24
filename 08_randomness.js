const r = require('raylib');

const WIDTH = 800;
const HEIGHT = 600;

r.InitWindow(WIDTH, HEIGHT, 'Random Distributions');
r.SetTargetFPS(50);

const points = [];

for (let i = 0; i < 500; i++) {
    const a = Math.random();
    const b = Math.random();
    const c = Math.random();

    const value = (a + b + c) / 3;

    const x = value * WIDTH;
    const y = Math.random() * HEIGHT;

    points.push({ x, y });
}

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.DARKBLUE);

    for (const p of points) {
        r.DrawCircle(p.x, p.y, 3, r.WHITE);
    }

    r.EndDrawing();
}

r.CloseWindow();
