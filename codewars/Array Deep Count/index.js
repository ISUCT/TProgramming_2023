function deepCount(array, count = 0){
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      count++
      if (typeof element === "object") {
          count = deepCount(element, count)
      }
  }
  return count
}