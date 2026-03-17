const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let x = 0;
let vx =1;
let y = 0;
let vy = 1;

function move() {
    ctx.clearRect(0, 0, 800, 800);
    x = x + vx;
    y = y + vy;
    if (x > 750 || x < 0) {
        vx = vx * -1;
    }
    if (y > 750 || y < 0) {
        vy = vy * -1;
    }
    ctx.fillRect(x, y, 50, 50);
    requestAnimationFrame(move);
}
move();