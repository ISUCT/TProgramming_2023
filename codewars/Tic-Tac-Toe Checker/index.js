function getVertical(board, index) {
    var a = 0
    var result = []
    while (a < 3) {
        result.push(board[a][index])
        a++
    }
    return result
}

function getDiagonal(board, isReversed) {
    var a = 0
    var result = []
    while (a < 3) {
        if (isReversed == true) {
            b = 2 - a
        } else {
            b = a
        }
        result.push(board[a][b])
        a++
    }
    return result
}

function isSolved(board) {
    var a = 0
    var hasEmptyspots = false;
    while (a < 3) {
        let vert = getVertical(board, a)
        let hori = board[a]
        if (Math.min.apply(null, vert) == 0 || Math.min.apply(null, hori) == 0) {
            hasEmptyspots = true
        }
        let sumV = vert.reduce((partialSum, a) => partialSum + a, 0);
        let sumH = hori.reduce((partialSum, a) => partialSum + a, 0);
        if (sumV == 6 || sumH == 6) {
            return 2
        } else if ((sumV == 3 && Math.min.apply(null, vert) != 0) || (sumH == 3 && Math.min.apply(null, hori) != 0)) {
            return 1
        }
        a++
    }
    let diag1 = getDiagonal(board, false)
    let diag2 = getDiagonal(board, true)
    let sum1 = diag1.reduce((partialSum, a) => partialSum + a, 0)
    let sum2 = diag2.reduce((partialSum, a) => partialSum + a, 0)
    console.log(diag1, diag2)
    if (sum1 == 6 || sum2 == 6) {
        return 2
    } else if ((sum1 == 3 && Math.min.apply(null, diag1) != 0) || (sum2 == 3 && Math.min.apply(null, diag2) != 0)) {
        return 1
    }
    if (hasEmptyspots) {
        return -1
    } else {
        return 0
    }
}