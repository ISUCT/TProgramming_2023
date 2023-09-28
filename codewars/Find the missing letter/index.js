function findMissingLetter(array) {
    let alphabetArr = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
    for (let i = 0; i < array.length - 1; i++){
        for (let j = 0; j < alphabetArr.length - 1; j++) {
            if (array[i] !== alphabetArr[j] && array[i+1] === alphabetArr[j+1]) {
                return alphabetArr[j]
            }
        }
    }
}