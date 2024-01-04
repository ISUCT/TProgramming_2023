function deepCount(a){
  let count = 0

  a.forEach((el) => {
    if (Array.isArray(el)) {
      count += 1
      count += deepCount(el)
    }else {
      count += 1
    }
  })

  return count
}

deepCount()