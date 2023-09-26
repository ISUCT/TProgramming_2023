function duplicateEncode(string){
    string = string.toLowerCase();
    var map = new Object;
    for (let index = 0; index < string.length; index++) {
        const element = string[index];
        map[element] = 0
    }
    for (let index = 0; index < string.length; index++) {
        const element = string[index];
        map[element] = map[element] + 1
    }
    var result = ""
    for (let index = 0; index < string.length; index++) {
        const element = string[index];
        if (map[element] > 1) {
            result = result + ")"
        } else {
            result = result + "("
        }
    }
    return result
}