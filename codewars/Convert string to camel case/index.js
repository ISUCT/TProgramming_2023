function toCamelCase(str){
    var res = "";
    for (var index = 0; index < str.length; ++index){
      if ((str[index] == "-") || (str[index] == "_")){
        var letter = str[index + 1];
        res = res + letter.toUpperCase();
        ++index;
      } else 
          res = res + str[index];
    }
    return res;
  }