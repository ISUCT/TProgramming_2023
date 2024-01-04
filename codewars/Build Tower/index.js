function towerBuilder(nFloors) {
  if (nFloors === 1) return ["*"]

  let newList = "*".repeat(nFloors * 2 - 1).split("")
  let resArr = []

  for (i = 0; i < nFloors; i++) {
    resArr.push(newList.join(''));

    newList[i] = " "
    newList[newList.length - 1 - i] = " "
  }


  return resArr.reverse();
}

towerBuilder()