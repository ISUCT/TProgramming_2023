function deepCount(arr){
    let k = arr.length;
    for (const elm of arr) 
      {
      k += Array.isArray(elm) ? deepCount(elm) : 0;
      }
    return k;
}