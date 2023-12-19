function productFib(prod) {
    let n = 0;
    let n1 = 1;
    let n2 = 1;
    let arr = [0, 1, 1];
   
    while (n2 < prod) {
       n = n1;
       n1 = n2;
       n2 = n + n1;
       arr = [n, n1, n2];
    }
   
    if (n2 * n1 === prod) {
       arr[2] = true;
    } else {
       arr[2] = false;
    }
   
    return arr;
   }