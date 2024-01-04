function findMissingLetter(array) {
  let firstlet = array[0].charCodeAt(0)

  for (i = 1; i < array.length; i++) {
    if (firstlet + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(firstlet + i)
    }
  }
}

findMissingLetter()