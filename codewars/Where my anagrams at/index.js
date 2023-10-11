function sortAlpha(letter) {
    return [...letter].sort((a,b)=>a.localeCompare(b)).join("")
}

function anagrams(word, words) {

    word = sortAlpha(word)
    let result = []; 

    words.forEach(element => {
        let elements = sortAlpha(element);
        if (elements == word){
            result.push(element)
        }
    });
    return result
}