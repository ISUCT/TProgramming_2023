function duplicateEncode(word){
    let c = ""
    let count = 0
    z = word.toLowerCase()
    for (let i = 0; i < z.length; i++) {
      count = 0
      for (let j = 0; j < z.length; j++) {
          if (z[j] === z[i]){
              count ++
          }
      }
      if (count > 1){
          c += ")"
      } else {
          c += "("
      } 
    }
    return c
  }