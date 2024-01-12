function toCamelCase(str){

    var newStrArr = str.split(/[_-]/);
    for (var i = 1; i < newStrArr.length; i++){
        newStrArr[i] = newStrArr[i][0].toUpperCase() + newStrArr[i].substring(1);
    }
    return newStrArr.join('');
}

console.log(toCamelCase("the-stealth-warrior"))
console.log(toCamelCase("The_Stealth_Warrior"))
console.log(toCamelCase("The_Stealth-Warrior"))
