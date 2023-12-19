function findMissingLetter(array) {
    let sortedArray = array.sort();
    let result = '';
   
    for (let i = 0; i < sortedArray.length - 1; i++) {
       if (sortedArray[i + 1].charCodeAt(0) !== sortedArray[i].charCodeAt(0) + 1) {
         result = String.fromCharCode(sortedArray[i].charCodeAt(0) + 1);
         break;
       }
    }
   
    return result;
   }