function toCamelCase(str){
  const words = str.split(/[-_]/)

  for (i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
  }

  return words.join('')
}

toCamelCase()