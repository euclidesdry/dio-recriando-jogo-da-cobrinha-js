const CANVAS = document.querySelector('#playerground__snake');
const CONTEXT = CANVAS.getContext('2d');
let BOX = 32;
let snake = [];

snake[0] = {
    x: 8 * BOX,
    y: 8 * BOX
};

/**
 * @param {string} color Backgorund color;
 * @param {number} squareSize Size of each the square;
 *
 * @description Create canvas background depending to the Backgorund color and square size;
 */
function makeBackground(color = "lightgreen", squareSize) {
    CONTEXT.fillStyle = color;
    CONTEXT.fillRect(0, 0, 16 * squareSize, 16 * squareSize);
}

/**
 * @param {string} color Snake color;
 * @param {number} squareSize Size of each the square;
 *
 * @description Create the snake with the color and square size and passed cordinates;
 */
function makeSnake(color = "lightgreen", squareSize) {
    for(let i = 0; i < snake.length; i++) {
        CONTEXT.fillStyle = color;
        CONTEXT.fillRect(snake[i].x, snake[i].y, squareSize, squareSize);
    }
}

makeBackground("lightgreen", BOX);
makeSnake("green", BOX);