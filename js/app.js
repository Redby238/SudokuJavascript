function validSolution(board) {

  for (let i = 0; i < board.length; i++) {
    if (!isValidRow(board[i])) {
      return false;
    }
  }

  for (let i = 0; i < board.length; i++) {
    if (!isValidRow(board.map(row => row[i]))) {
      return false;
    }
  }

 
  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board.length; j += 3) {
      const subgrid = board.slice(i, i + 3).map(row => row.slice(j, j + 3));
      if (!isValidRow(subgrid[0])) {
        return false;
      }
    }
  }

  return true;
}

function isValidRow(row) {
  const set = new Set();
  for (let i = 0; i < row.length; i++) {
    const num = row[i];
    if (num === '.') continue;
    if (set.has(num)) {
      return false;
    }
    set.add(num);
  }
  return true;
}

const board = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
];

const isValid = validSolution(board);
console.log(isValid ? 'The Sudoku board is valid.' : 'The Sudoku board is invalid.');
