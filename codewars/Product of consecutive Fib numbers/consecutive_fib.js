function productFib(prod){
    let fl = 0
    let fr = 1
    while (fl * fr < prod){
        s = fl + fr
        fl = fr
        fr = s
    }
    if (fl * fr == prod){
        return [fl, fr, true]
    } else {
        return [fl, fr, false]
    }
  }