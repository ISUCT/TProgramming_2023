function productFib(prod){
    let a = 0;
    let b = 1;

    while (a*b<prod) {
        let preva = a;

        a = b;
        b += preva;
        console.log(a);
        console.log(b);

    }

    return [a, b, a*b === prod]
}