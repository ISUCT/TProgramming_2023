export function duplicateEncode(word: string) {
  const newWord = word.toLowerCase();
  const letters: Record<string, number> = {};
  let result = "";
  for (let i = 0; i < newWord.length; i++) {
    letters[newWord[i]] = (letters[newWord[i]] ?? 0) + 1;
  }
  for (let i = 0; i < newWord.length; i++) {
    if (letters[newWord[i]] >= 2) {
      result += ")";
    } else {
      result += "(";
    }
  }
  return result;
}
