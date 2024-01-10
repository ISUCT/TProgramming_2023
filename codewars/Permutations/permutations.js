function permutations(string) {
  const resultMaps = [new Map()];

  const occurancies = {};

  for (let k of string) {
    occurancies[k] = occurancies[k] ? occurancies[k] + 1 : 1;
    resultMaps[0].set(k, { [k]: 1 });
  }

  for (let i = 0; i < string.length; i++) {
    const prevMap = resultMaps[i];
    const newMap = new Map();
    for (let k of prevMap.keys()) {
      for (let j of string) {
        if ((prevMap.get(k)[j] ?? 0) < occurancies[j]) {
          newMap.set(k + j, {
            ...prevMap.get(k),
            [j]: (prevMap.get(k)[j] ?? 0) + 1,
          });
        }
      }
    }
    if (newMap.size) {
      resultMaps.push(newMap);
    }
  }
  return [...resultMaps[resultMaps.length - 1].keys()];
}
