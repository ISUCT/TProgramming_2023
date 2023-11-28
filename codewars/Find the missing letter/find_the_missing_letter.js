function findMissingLetter(array)
{
  let res = '';
  let str = array.join('');
  let lastWord = str.charCodeAt(0);
  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) - lastWord === 1) {
      lastWord = str.charCodeAt(i);
    } else {
      let num = lastWord + 1;
      res = String.fromCharCode(num);      
    }
  }
  return res;
}