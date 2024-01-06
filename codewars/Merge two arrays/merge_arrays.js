function mergeArrays(a, b) {
    let result = []
    for (let i = 0; i < Math.max(a.length, b.length); i++){
        if (a.length > i){
            result.push(a[i])
        }
        if (b.length > i){
            result.push(b[i])
        }
    }
    return result
  }


