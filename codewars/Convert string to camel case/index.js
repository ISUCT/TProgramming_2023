function toCamelCase(str){
    str = str.split("");
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "-" || str[i] === "_"){
          str.splice(i, 1);
          str[i] = str[i].toUpperCase();
        }
    }
    str = str.join("")

    return str
}