function duplicateEncode(word){
    word = word.toLowerCase()
    var res = "";
    var countedLetters = {};
    for (var i = 0; i < word.length; ++i){
        var a = word[i];
        if (countedLetters[a] != undefined)
            ++countedLetters[a];
        else
            countedLetters[a] = 1;
    }
    for (var i = 0; i < word.length; ++i){
        var a  = word[i]
        if (countedLetters[a] > 1)
            res = res + ")";
        else
            res = res + "(";
    }
    return res;
}