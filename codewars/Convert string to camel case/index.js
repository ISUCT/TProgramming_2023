function toCamelCase(str){
    let word = Array.from(str)
      word.forEach((element, item) =>{
          if (element == "_" || element == "-"){
              word.splice(item, 1)
              word[item] = word[item].toUpperCase()
          }
      })
    return word.join("")
}