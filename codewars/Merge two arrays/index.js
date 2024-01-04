function mergeArrays(a, b) {
  return (b.forEach((el, id) => a.splice(id * 2 + 1, 0, el)), a)
}

mergeArrays()