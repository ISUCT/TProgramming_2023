function NumLength(num: number, res: number = 1): number {
    if (num < 10) {
        return res
    } else {
        num = Math.floor(num / 10)
        return NumLength(num, res + 1)
    }
}

export const digitalRoot = (num:number):number => {
    var len = NumLength(num)
    var res = 0
    for (let index = 0; index < len; index++) {
        const element = Math.floor((num % 10 ** (len - index)) / 10 ** (len - 1 - index));
        res = res + element
    }
    if (NumLength(res) == 1) {
        return res
    } else {
        return digitalRoot(res)
    }
};