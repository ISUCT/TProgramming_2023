function toCamelCase(str) {
    str = str.split(/[-_]+/)
    let arr = [str[0]]
    for (i of str.slice(1)) { arr.push(i[0].toUpperCase() + i.slice(1)) }
    return arr.join("")
}

console.log(toCamelCase("the_stealth_warrior"))
console.log(toCamelCase("The-Stealth-Warrior"))
console.log(toCamelCase("The_Stealth-Warrior"))