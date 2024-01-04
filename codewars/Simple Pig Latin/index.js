function pigIt(str){
  let newWord = []
  const strArr = str.split(' ')

  for (i = 0; i < strArr.length; i++) {
    if (!(/[a-zA-Z0-9]/.test(strArr[i]))) {
      newWord.push(strArr[i])
    }else{
      console.log(str)
      newWord.push(strArr[i].slice(1) + strArr[i].charAt(0) + 'ay')
    }
  }
  return newWord.join(' ')
}

pigIt()