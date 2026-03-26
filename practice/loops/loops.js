let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");

for(let y = 50; y <= 150; y+=50){
    for(let x = 0; x <=800; x +=75){
        ctx.fillRect(x, y, 50, 20);
    }
}

canvas = document.getElementById("canvas2");
ctx = canvas.getContext("2d");

for(let y = 50; y <= 500; y+=50){
    let row = ((y - 50) / 50) + 1;
    for(let i = 0; i < row; i++){
        ctx.fillRect(i * 75, y, 50, 20);
    }
}
canvas = document.getElementById("canvas3");
ctx = canvas.getContext("2d");

// Left triangle: increasing rows from top-left down
// Right flipped triangle: decreasing rows from top-right down
for(let y = 50; y <= 250; y += 50){
    let row = ((y - 50) / 50) + 1;

    // Left side (L)
    for(let i = 0; i < row; i++){
        ctx.fillRect(i * 75, y, 50, 20);
    }

    // Right side (flipped, 7)
    let rightCount = 6 - row; // 5,4,3,2,1
    for(let i = 0; i < rightCount; i++){
        ctx.fillRect(800 - 50 - i * 75, y, 50, 20);
    }
}

canvas = document.getElementById("canvas4");
ctx = canvas.getContext("2d");

//fill in code for canvas4 here