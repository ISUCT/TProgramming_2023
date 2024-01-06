function digitalRoot(n) {
    if (String(n).length > 1){
        let n_copy = n
        let new_n = 0
        while (n_copy > 0){
            new_n += n_copy % 10
            n_copy = Math.floor(n_copy/10)
        }
        return digitalRoot(new_n)
    } else {
        return n
    }
}