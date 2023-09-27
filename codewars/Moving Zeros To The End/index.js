function moveZeros(arr) {
    var countZeros = 0;
    var res = [];
    for (var index = 0; index < arr.length; ++index){
          if (arr[index] === 0) {
            ++countZeros;
          } else 
            res.push(arr[index])
      }
    for (var index = 0; index < countZeros; ++index){
      res.push(0)  
    }
    return res;
  }