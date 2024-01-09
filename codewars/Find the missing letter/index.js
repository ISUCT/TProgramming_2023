function findMissingLetter(array)
{
  var res = "";
  for (var index = 1; index < array.length; index++){
    var currentLetter = array[index];
    var previousLetter = array[index-1];
    if (currentLetter.charCodeAt(0) != previousLetter.charCodeAt(0) + 1){
        res = String.fromCodePoint(currentLetter.charCodeAt(0) - 1);
  }
  }
  return res;
}