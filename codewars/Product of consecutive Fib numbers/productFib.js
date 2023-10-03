function productFib(prod) {

    var FibFirst = 0
    var FibSecond = 1

    while (FibFirst * FibSecond < prod){
        const store = FibSecond
        FibSecond = FibSecond + FibFirst
        FibFirst = store

    }
    return [FibFirst, FibSecond, FibFirst * FibSecond === prod];
  }
  

console.log(productFib(714))
console.log(productFib(800))