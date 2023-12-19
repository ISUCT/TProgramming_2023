function moveZeroes(arr) {
    let index = 0;
   
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] !== 0) {
         arr[index] = arr[i];
         if (i !== index) {
           arr[i] = 0;
         }
         index++;
       }
    }
   
    return arr;
   }