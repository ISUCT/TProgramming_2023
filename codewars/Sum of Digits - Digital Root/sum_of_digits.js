function digitalRoot(n) {
    let sum = 0;
    let num = [];
    num = Array.from(String(n), Number);
    for (let i = 0; i < num.length; i++) {
      sum += num[i];
    }
    if (String(sum).length === 1) {
      return sum;
    } else {
      return digitalRoot(sum);
    }  
  }