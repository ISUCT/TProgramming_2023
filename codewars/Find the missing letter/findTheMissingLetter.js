array = ["O", "Q", "R", "S"]

console.log(findMissingLetter(array))

function findMissingLetter(charArray){
    var idx = 0
    firstLetter = charArray[0].charCodeAt(idx)
    for (var i = 1; i < charArray.length; i++){
        currentLetter = charArray[i].charCodeAt(idx)
        if (1 < currentLetter - firstLetter){
            return String.fromCharCode(firstLetter + 1)
        }
    }
}