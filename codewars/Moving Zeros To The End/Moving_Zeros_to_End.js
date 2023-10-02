function moveZeros(arr) {
  let res = [];
  let zeros = []; 
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
      zeros.push(arr[i]);
    } else {
      res.push(arr[i]);
    }
  }
  return res.concat(zeros);
}
