const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

var isValidSudoku = function (board) {
  // Check each row
  for (let i = 0; i < 9; i++) {
    if (!isValidRow(board, i)) {
      return false;
    }
  }

  // Check each column
  for (let j = 0; j < 9; j++) {
    if (!isValidCol(board, j)) {
      return false;
    }
  }

  // Check each 3x3 subgrid
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      if (!isValidGrid(board, i, j)) {
        return false;
      }
    }
  }

  return true;
};

function isValidRow(board, row) {
  const seen = new Set();

  for (let i = 0; i < 9; i++) {
    let num = board[row][i];
    if (num !== "." && seen.has(num)) {
      return false;
    }
    seen.add(num);
  }
  return true;
}
function isValidCol(board, col) {
  const seen = new Set();
  for (let i = 0; i < 9; i++) {
    let num = board[i][col];
    if (num !== "." && seen.has(num)) {
      return false;
    }
    seen.add(num);
  }
  return true;
}

function isValidGrid(board, startRow, startCol) {
  const seen = new Set();
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const num = board[startRow + i][startCol + j];
      if (num !== "." && seen.has(num)) {
        return false;
      }
      seen.add(num);
    }
  }
  return true;
}
console.log(isValidSudoku(board));
