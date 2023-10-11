function sumPairs (ints, s){
  
    const set = new Set();
    
    for (const element of ints) {
      if (set.has(s - element)) return [s - element, element];
      set.add(element);
    }
  };