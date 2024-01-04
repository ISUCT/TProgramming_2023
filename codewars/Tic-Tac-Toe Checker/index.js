function isSolved(board) {
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      if (board[i][0] === 1) return 1
      if (board[i][0] === 2) return 2
    }
  }

  if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    if (board[0][0] === 1) return 1
    if (board[0][0] === 2) return 2
  }
  if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    if (board[0][2] === 1) return 1
    if (board[0][2] === 2) return 2
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === 0) return -1
    }
  }

  return 0;
}

isSolved()