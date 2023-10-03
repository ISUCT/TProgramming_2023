function pigIt(str){
    let res = [];
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "!" || arr[i] === "?") {
        res.push(arr[i]);
      } else {
        let subStr1 = arr[i].slice(0, 1);
        let subStr2 = arr[i].slice(1);
        let vr = subStr2 + subStr1 + "ay";
        res.push(vr);
      }
    }
    return res.join(' ');
  }