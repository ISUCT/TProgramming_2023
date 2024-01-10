export const digitalRoot = (n: number): number => {
  let result = String(n);
  while (result.length >= 2) {
    let str = 0;
    for (let i of result) {
      str += +i;
    }
    result = String(str);
  }
  return +result;
};
