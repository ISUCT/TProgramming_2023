export function findMissingLetter(arr: string[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    const charCode = arr[i].charCodeAt(0);
    if (charCode !== arr[i + 1].charCodeAt(0) - 1) {
      return String.fromCharCode(charCode + 1);
    }
  }
}
