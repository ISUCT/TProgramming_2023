function anagramDifference(w1,w2){

    let len = w1.length + w2.length
    let num = 0;
    for (count = 0; count < w2.length;){
        if (w1.includes(w2[count])) {
            w1 = w1.replace(w2[count], "")
            w2 = w2.replace(w2[count], "")
            num += 2
        } else count++
    }
    return len - num
}