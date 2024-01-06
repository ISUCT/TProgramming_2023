function toCamelCase(str){
    for (let index = 0; index < str.length; index++) {
      //console.log(str[index])
      if (str[index] == "-" || str[index] == "_") {
          str = str.substring(0, index) + str[index + 1].toUpperCase() + str.substring(index + 2)
      }
      //console.log(str)
  }
  return str
}