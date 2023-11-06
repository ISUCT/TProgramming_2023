function toCamelCase(str) {
  if (str.length === 0) {
    return "";
  }
  let words = str.split(/[-_]/);
  let res = words[0];
  for (let i = 1; i < words.length; i++) {
    res += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return res;
}
