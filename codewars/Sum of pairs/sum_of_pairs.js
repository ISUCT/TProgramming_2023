function sumPairs(ints, s) {
    var seen = {};
  
    for (let i = 0; i < ints.length; i++) {
      let num = ints[i];
      if (seen[s - num]) {
        return [s - num, num];
      }
      seen[num] = true;
    }
    return undefined ;
  }