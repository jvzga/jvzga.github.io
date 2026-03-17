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
    ctx.fillRect(x, y, 50, 50);
    requestAnimationFrame(move);
}
move();