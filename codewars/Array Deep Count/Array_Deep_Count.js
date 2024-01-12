function deepCount(a) {
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      count += deepCount(a[i]) + 1; 
    } else {
      count++;
    }
  }

  return count;
}
