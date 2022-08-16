document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        setTimeout(() => {
            alert(`O jogador ${playerTime} foi grande vencedor!!`)
        }, 10)
    };
    updateSquares(position);
};

function updateSquares(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}
  document.addEventListener("keydown", event => {
        const { key } = event
        if (key.toLowerCase() === "s") {
          location.reload()
        }
      })