function sumPairs(ints, s) {
    var second_index = +Infinity
    var answer = undefined;
    for (let i = 0; i < ints.length - 1; i++){
        for (let j = i + 1; j < ints.length; j++){
            if ((ints[i] + ints[j]) == s){
                if (second_index > j){
                    second_index = j
                    answer = [ints[i], ints[j]]
                }
            }
        }
    }
    return answer
  }
