function pigIt(str){
    var array = str.match(/\w+|\s+|[^\s\w]+/g)
    for (index = 0; index < array.length; index++){
      if (/^[a-zA-Z]/.test(array[index])) {
        array[index] = array[index].substring(1) + array[index][0] + "ay"
      }
    }
    return array.join("")
  }