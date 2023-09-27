function deepCount(a, count = 0){     
    for (var index = 0; index < a.length; index++){  
          count++;
          if (typeof(a[index]) === "object") {
              count = deepCount(a[index], count); 
        }
  }
    return count;
}