function findMissingLetter(array) {

    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let uppercase = false;
    result = "";
  
    if (array[0] == array[0].toUpperCase()){
      uppercase = true;
    }
  
    for (count = 0; count < alphabet.length; count++){
      if(array[0] == alphabet[count] || array[0] == alphabet[count].toUpperCase()){
        alphabet = alphabet.splice(count, array.length);
        break;
      } 
    }
  
    for (i = 0; i < array.length; i++){
      if (!uppercase && array[i] != alphabet[i]){
        result = alphabet[i];
        break;
      } else if (uppercase && array[i] != alphabet[i].toUpperCase()){
        result = alphabet[i].toUpperCase();
        break;
      }
    }
    return result;
}