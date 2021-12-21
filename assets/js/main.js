const CANVAS = document.querySelector('#playerground__snake');
const CONTEXT = CANVAS.getContext('2d');
let BOX = 32;
let snake = [];

snake[0] = {
    x: 8 * BOX,
    y: 8 * BOX
};

let DIRECTION = "right";

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
function makeSnake(color = "green", squareSize) {
    for(let i = 0; i < snake.length; i++) {
        CONTEXT.fillStyle = color;
        CONTEXT.fillRect(snake[i].x, snake[i].y, squareSize, squareSize);
    }
}

function startGame() {
    makeBackground("lightgreen", BOX);
    makeSnake("green", BOX);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(DIRECTION === "right") snakeX += BOX;
    if(DIRECTION === "left") snakeX -= BOX;
    if(DIRECTION === "up") snakeY -= BOX;
    if(DIRECTION === "down") snakeY += BOX;

    snake.pop();
    
    let newSnakeHead = {
        x: snakeX,
        y: snakeY
    };

    snake.unshift(newSnakeHead);
}

let game = setInterval(startGame, 100);