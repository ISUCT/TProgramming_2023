function deepCount(arr) {
    let count = 0;
     
    for (let i = 0; i < arr.length; i++) {
       if (Array.isArray(arr[i])) {
         count += deepCount(arr[i]);
       } else {
         count++;
       }
    }
     
    return count;
   }