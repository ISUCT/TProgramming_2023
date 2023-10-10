function isSolved(board) {

    let array = [...board[0], ...board[1], ...board[2]]
    if (board[1][1] != 0){
        if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) return board[1][1]
        else if (board[0][2] === board[1][1] === board[2][0]) return board[1][1]
    }
    for (count = 0; count < board.length; count++){
        let boards = board[count]
        let arr = [board[0][count], board[1][count], board[2][count]]
        if (boards.every( elem => elem === boards[0] && boards[count] != 0)) return boards[0]
        else if (arr.every( elem => elem === arr[0]) && arr[count] != 0) return arr[0]
        else if (!array.includes(0)) return 0
    }
    return -1
}