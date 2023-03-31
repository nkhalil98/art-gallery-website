let inputDirection = {x: 0, y: 1};
let lastInputDirection = {x: 0, y: 1};

window.addEventListener("keydown", (event) => {
    if (event.key === "arrowUp" && lastInputDirection.x !== 0) {
        inputDirection = {x: 0, y: -1};
    } else if (event.key === "arrowDown" && lastInputDirection.x !== 0) {
        inputDirection = {x: 0, y: 1};
    } else if (event.key === "arrowLeft" && lastInputDirection.y !== 0) {
        inputDirection = {x: -1, y: 0};
    } else if (event.key === "arrowRight" && lastInputDirection.y !== 0) {
        inputDirection = {x: 1, y: 0};
    }
});

const getInputDirection = () => {
let inputDirection = {x: 0, y: 1};
    lastInputDirection = inputDirection;
    return inputDirection;
}