function mergeArrays(a, b) {
  let res = [];
  for(let i = 0; i < Math.max(a.length, b.length); i++){
    if (i < a.length){
      res.push(a[i]);
    }
    if (i < b.length){
      res.push(b[i]);
    }
  }
  return(res);
}
