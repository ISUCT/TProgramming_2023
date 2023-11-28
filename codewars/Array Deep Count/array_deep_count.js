function deepCount(a){
    let elem = a.length;
    if (a.length !== 0) {
      for (let i = 0; i < a.length; i++){
        if (Array.isArray(a[i])) {
          elem = elem + deepCount(a[i]); 
        }
      }
    } else {
      return a.length;
    }
    return elem;
  }