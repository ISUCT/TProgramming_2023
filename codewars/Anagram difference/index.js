function anagramDifference(w1,w2){
    let map = new Map();
    let count = 0;
    let l = (w1+w2).length;
    for (let i of w1) {
        map.set(i, (map.get(i) || 0)+1); 
    }

    for (let i of w2){
        map.set(i, (map.get(i) || 0)-1);
    }

    for (let [key, value] of map) {
        count += Math.abs(value);
    }



    return count;
}