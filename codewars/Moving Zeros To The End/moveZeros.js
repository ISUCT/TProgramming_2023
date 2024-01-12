const arr = [false,1,0,1,2,0,1,3,"a"]

function moveZeros(arr) {
    var emptyArray = []
    var counter = 0

    for (var i = 0; i < arr.length; i++){

        if (arr[i] !== 0){
            emptyArray.push(arr[i])
        } else {
            counter++
        }
    }
    for (var j = 0; j < counter; j++){
        emptyArray.push(0)
    }

    return emptyArray
}

console.log(moveZeros(arr))