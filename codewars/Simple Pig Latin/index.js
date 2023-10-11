function pigIt(str){

    let arr = str.split(" ")
    let result = ""

    arr.forEach((element) => {
        if (element.toLowerCase() != element.toUpperCase()){
            element = element.substring(1)+element[0] + "ay"
        }
        result += element + " "
    })
    return result.slice(0, result.length-1)
}
