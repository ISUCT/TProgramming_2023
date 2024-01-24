export function randElement(arr) {
  if (arr.length === 0) {
    throw new Error('Массив, поданный в randElement имеет длину 0');
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
export function d6(): number {
  return Math.floor(Math.random() * 6) + 1;
}
export function d4(): number {
  return Math.floor(Math.random() * 4) + 1;
}
export function shuffle<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
