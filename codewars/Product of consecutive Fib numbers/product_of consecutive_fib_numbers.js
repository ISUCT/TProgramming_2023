function productFib(prod){
    let first = 0;
    let last = 1;
    while (first * last < prod) {
      const rem = last;
      last = first + last;
      first = rem;
    }
    return [first, last, first * last === prod];
  }