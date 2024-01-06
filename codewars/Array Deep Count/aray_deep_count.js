function deepCount(a){
    let answer = 0
    for (let i = 0; i < a.length; i++){
        if (typeof(a[i]) == "object"){
            answer += 1 + deepCount(a[i])
        } else {
            answer += 1
        }
    }
    return answer
  }