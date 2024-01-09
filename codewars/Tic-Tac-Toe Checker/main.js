function isSolved(b) {
    // Проверить строки
    for (let i = 0; i < 3; i++) {
        if (b[i][0] !== 0 && b[i][0] === b[i][1] && b[i][1] === b[i][2]) { return b[i][0]; }
    }

    // Проверить столбцы
    for (let j = 0; j < 3; j++) {
        if (b[0][j] !== 0 && b[0][j] === b[1][j] && b[1][j] === b[2][j]) { return b[0][j]; }
    }

    // Проверьте диагонали
    if (b[0][0] !== 0 && b[0][0] === b[1][1] && b[1][1] === b[2][2]) { return b[0][0]; }
    if (b[0][2] !== 0 && b[0][2] === b[1][1] && b[1][1] === b[2][0]) { return b[0][2]; }

    // Проверьте наличие пустых мест
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (b[i][j] === 0) {
                return -1;
            }
        }
    }
    return 0;
}

// Лучшее решение
// function isSolved(board) {
//     board = board.join('-').replace(/,/g, '');
//     if (/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
//     if (/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
//     if (/0/.test(board)) return -1;
//     return 0;
// }

console.log(isSolved([[0, 0, 1],
[0, 1, 2],
[2, 1, 0]]), -1)