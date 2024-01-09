export const productFib = (prod: number): [number, number, boolean] => {
    let [Fn, Fn1] = [0, 1];
    while (Fn * Fn1 < prod) { [Fn, Fn1] = [Fn1, Fn + Fn1]; }
    return [Fn, Fn1, Fn * Fn1 == prod];
}

console.log(productFib(714), "(21, 34, true)")
console.log(productFib(800), "(34, 55, false)")