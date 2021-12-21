const CANVAS = document.querySelector("#playerground__snake");
const CONTEXT = CANVAS.getContext("2d");
let BOX = 32;
let snake = [];

snake[0] = {
    x: 8 * BOX,
    y: 8 * BOX,
};

let DIRECTION = "right";

let snakeFood = {
    x: Math.floor(Math.random() * 15 + 1) * BOX,
    y: Math.floor(Math.random() * 15 + 1) * BOX,
}

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
    for (let i = 0; i < snake.length; i++) {
        CONTEXT.fillStyle = color;
        CONTEXT.fillRect(snake[i].x, snake[i].y, squareSize, squareSize);
    }
}

function makeSnakeFood (color = "orange", squareSize) {
    CONTEXT.fillStyle = color;
    CONTEXT.fillRect(snakeFood.x, snakeFood.y, squareSize, squareSize)
}

document.addEventListener("keydown", updateDirection);

/**
 *
 * @param {KeyboardEvent} event get the KeyboardEvent from addEventListever event parameter;
 *
 * @description get the KeyboardEvent from addEventListever event and update the direction of the snake;
 */
function updateDirection(event) {
    if (event.keyCode === 37 && DIRECTION !== "right") DIRECTION = "left";
    if (event.keyCode === 38 && DIRECTION !== "down") DIRECTION = "up";
    if (event.keyCode === 39 && DIRECTION !== "left") DIRECTION = "right";
    if (event.keyCode === 40 && DIRECTION !== "up") DIRECTION = "down";
}

/**
 * @description starts the game.
 */
function startGame() {
    if (snake[0].x > 15 * BOX && DIRECTION === "right") snake[0].x = 0;
    if (snake[0].x < 0 && DIRECTION === "left") snake[0].x = 16 * BOX;
    if (snake[0].y > 15 * BOX && DIRECTION === "down") snake[0].y = 0;
    if (snake[0].y < 0 && DIRECTION === "up") snake[0].y = 16 * BOX;

    for(let i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            clearInterval(game);
            alert("Game Over 😱, Try again!");
        }
    }

    makeBackground("#a5c0db", BOX);
    makeSnake("blue", BOX);
    makeSnakeFood("orange", BOX);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (DIRECTION === "right") snakeX += BOX;
    if (DIRECTION === "left") snakeX -= BOX;
    if (DIRECTION === "up") snakeY -= BOX;
    if (DIRECTION === "down") snakeY += BOX;

    if (snakeX !== snakeFood.x || snakeY !== snakeFood.y) {
        snake.pop();
    } else {
        snakeFood.x = Math.floor(Math.random() * 15 + 1) * BOX;
        snakeFood.y = Math.floor(Math.random() * 15 + 1) * BOX;
    }

    snake.pop();

    let newSnakeHead = {
        x: snakeX,
        y: snakeY,
    };

    snake.unshift(newSnakeHead);
}

let game = setInterval(startGame, 200);
