function anagrams(word, words) {
    let answer = []
    for (let words_key in words){
        let candidate = words[words_key]
        let anagram = true
        for (let word_key in word){
            if (words[words_key].indexOf(word[word_key]) >= 0){
                words[words_key] = words[words_key].replace(word[word_key], '')
            } else {
                anagram = false
                break
            }
        }
        if (words[words_key].length == 0 && anagram){
            answer.push(candidate)
        }
    }
    return answer
}

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))
