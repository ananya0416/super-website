let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleMove(index) {
  if (board[index] === '' && !checkWinner()) {
    board[index] = currentPlayer;
    document.getElementById('message').innerText = '';
    renderBoard();
    if (checkWinner()) {
      document.getElementById('message').innerText = `${currentPlayer} wins!`;
    } else if (!board.includes('')) {
      document.getElementById('message').innerText = `It's a draw!`;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function renderBoard() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, index) => {
    cell.innerText = board[index];
  });
}

function checkWinner() {
  return winningCombinations.some(combination => {
    const [a, b, c] = combination;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

function resetGame() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  document.getElementById('message').innerText = '';
  renderBoard();


}



