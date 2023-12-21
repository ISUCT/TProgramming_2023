function digitalRoot(number){

    var numberStr = String(number)
    numberStr = numberStr.split("")

    if (number > 9){
        var sum = 0
        for (var i = 0; i < numberStr.length; i++ ){

            sum += Number(numberStr[i])

        }

        return digitalRoot(sum)

    } else {

        return number

    }
}

console.log(digitalRoot(16))
console.log(digitalRoot(942))
console.log(digitalRoot(132189))
console.log(digitalRoot(493193))
console.log(digitalRoot(10))