function add(a, b) {
    let sum = "";
  
    if (a.length > b.length) {
      l = a.length - b.length;
  
      for (let i = 0; i < l; i++) {
        b = "0" + b;
      }
    }
  
    if (a.length < b.length) {
      l = b.length - a.length;
  
      for (let i = 0; i < l; i++) {
        a = "0" + a;
      }
    }
  
    let step = [];
    for (let i = a.length - 1; i >= 0; i--) {
       let A = Number(a[i]);
       let B = Number(b[i]);
       let result = A+B;
      if (step[i + 1]) {
        result = step[i + 1] + A + B;
      } else {
        result = A + B;
      }
      if (result >= 10 && i !== 0) {
        sum = String(result - 10) + sum;
        step[i] = 1;
      } else {
        sum = String(result) + sum;
      }
    }
  
    return sum;
  }