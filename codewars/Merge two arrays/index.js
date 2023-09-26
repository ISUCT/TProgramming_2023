function mergeArrays(a, b) {
    var result = []
    var len = Math.max(a.length, b.length) 
    for (index = 0; index < len; index++){
      if (a[index] != null){
        result.push(a[index])
      }
      if (b[index] != null){
        result.push(b[index])
      }
    }
    return result
  }