function productFib(prod){
  let [fibPrev, fibCur] = [0, 1]

  while (fibPrev * fibCur < prod ){
    console.log([fibPrev, fibCur, fibPrev * fibCur === prod])

    const fibNext = fibPrev + fibCur

    fibPrev = fibCur
    fibCur = fibNext
  }

  console.log([fibPrev, fibCur, fibPrev * fibCur === prod])
  return [fibPrev, fibCur, fibPrev * fibCur === prod]
}

productFib()