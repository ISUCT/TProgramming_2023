function sumPairs(ints, s) {
    let obj = {};
    let arr;
   
    for (let i = 0; i < ints.length; i++) {
       let complement = s - ints[i];
       if (complement in obj) {
         arr = [ints[i], complement];
         break;
       } else {
         obj[ints[i]] = true;
       }
    }
   
    return arr || undefined;
   }