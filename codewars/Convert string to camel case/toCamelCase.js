function toCamelCase(str) {
  let setNextToUpper = false;
  let resultStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-" || str[i] === "_") {
      setNextToUpper = true;
      continue;
    }
    if (setNextToUpper) {
      resultStr += str[i].toUpperCase();
      setNextToUpper = false;
    } else {
      resultStr += str[i];
    }
  }
  return resultStr;
}
