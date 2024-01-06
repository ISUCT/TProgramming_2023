function isSolved(board) {
    draw_possibility = false
    const win_positions = [[[0, 0], [0, 1], [0, 2]], 
    [[1, 0], [1, 1], [1, 2]], 
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 1], [2, 2]], 
    [[0, 2], [1, 1], [2, 0]], 
    [[0, 0], [1, 0], [2, 0]], 
    [[0, 1], [1, 1], [2, 1]], 
    [[2, 0], [2, 1], [2, 2]]]
    for (let way = 0; way < win_positions.length; way++){
        let values = ''
        for (let position = 0; position < 3; position++){
            let row = win_positions[way][position][0]
            let column = win_positions[way][position][1]
            values += String(board[row][column])
        }
        if (values.split('1') == 4){
            return 'X';
        } else if (values.split('2') == 4){
            return 'O'
        } else if (values.split('0') > 0){
            draw_possibility = true
        }
    }
    if (draw_possibility) {
        return -1
    } else {
        return 0
    }
  }

