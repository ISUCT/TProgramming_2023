export const digitalRoot = (n: number): number => {
    let summ;
    while (n > 9) {
        summ = 0
        for (let i of String(n).split("")) { summ += Number(i) }
        n = summ
    }
    return n
};

console.log(digitalRoot(493193))

// Популярное решение на сайте
/*

export function digitalRoot(n: number): number {
  return (n - 1) % 9 + 1;
}

*/