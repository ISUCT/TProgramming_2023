function mergeArrays(a, b) {
    const maxLength = Math.max(a.length, b.length);
    let res = [];
    
    for (let i = 0; i < maxLength; i++) {
      res.push(a[i]);
      res.push(b[i]);
    }
  
    return res.filter((value) => value !== undefined);
  }