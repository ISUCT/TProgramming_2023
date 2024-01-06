function toCamelCase(sentence){
    let uppered_one = "";
    let skip_char = false;
    for (let i = 0; i < sentence.length; i++){
        if (!skip_char){
            if (sentence[i] == "-" | sentence[i] == "_"){
                skip_char = true
            } else {
                uppered_one += sentence[i]
            }
        } else {
            uppered_one += sentence[i].toUpperCase()
            skip_char = false
        }
    }
    return uppered_one
}