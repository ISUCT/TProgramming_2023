function anagramDifference(w1,w2){
    let ar1 = w1.split('');
    let ar2 = w2.split('');
    let res = [];
    if (ar1.length === 0) {
      return ar2.length;
    } else if (ar2.length === 0) {
      return ar1.length;
    }
    for (let i = 0; i < ar1.length; i++) {
      if (ar2.indexOf(ar1[i]) !== -1) {
        res.push(ar2[ar2.indexOf(ar1[i])]);
        ar2.splice(ar2.indexOf(ar1[i]), 1);
      }
    }
    return (w1.length + w2.length) - res.length * 2;
  }