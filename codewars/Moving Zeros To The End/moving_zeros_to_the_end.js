function moveZeros(arr) {
    let arr0 = [];
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        arr0.push(0);
      } else {
        arr1.push(arr[i]);
      }
    }
    let res = [...arr1, ...arr0];
    
    return res ;
  }