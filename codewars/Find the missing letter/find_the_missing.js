function findMissingLetter(char_arr)
{
  var index = 0;
  first_code = char_arr[0].charCodeAt(index)
    for (let i = 1; i < char_arr.length; i++){
        current_code = char_arr[i].charCodeAt(index)
        if ((current_code - first_code) > 1){
            return String.fromCharCode(current_code - 1)
        } else {
            first_code = current_code
        }
    }
}