function moveZeros(arr) {
    let new_arr = []
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] != 0){
            new_arr.push(arr[i])
        } else {
            count += 1
        }
    }
    for (let j = 0; j < count; j ++){
        new_arr.push(0)
    }
    return new_arr
  }