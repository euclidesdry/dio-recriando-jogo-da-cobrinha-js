const CANVAS = document.querySelector('#playerground__snake');
const CONTEXT = CANVAS.getContext('2d');
let box = 32;

function criarBackground() {
    CONTEXT.fillStyle = "lightgreen";
    CONTEXT.fillRect(0, 0, CANVAS.width, CANVAS.height);
}

criarBackground();