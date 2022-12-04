"use strict";
const shuriken = document.getElementById("shuriken");
const background = document.getElementById("box");
let x = 0, y = 0, dirx = 1, diry = 1, rotation = 0, color = "#32292a";

const colors = ["#1f61df","#fbaec3","#8ad5df","#f0fbfb","#d9c180","#32292a"];
const speed = 1;

function chooseColor(){
    let chosen;
    chosen = colors[Math.floor(Math.random()*colors.length)];
    while (chosen == color){
        chosen = colors[Math.floor(Math.random()*colors.length)];
    };
    console.log(color)
    color = chosen;
    background.style.background = color;
}
function animate(){
    if (x > window.innerWidth - 100|| x < 0) {
        dirx *= -1;
        chooseColor();
    }
    if (y > window.innerHeight - 100 || y < 0) {
        diry *= -1;
        chooseColor();
    }
    if (rotation > 360) {
        rotation -= 360;
    }
    x += 1 * speed * dirx;
    y += 1 * speed * diry;
    rotation += 1 * speed/2;
    shuriken.style.transform = `translate(${x}px,${y}px) rotate(${rotation}deg)`;
    window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate)