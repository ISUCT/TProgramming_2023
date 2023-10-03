function sumIntervals(intervals) {
    // Сортируем интервалы по началу
    intervals.sort(function(a, b) {
      return a[0] - b[0];
    });
  
    let totalLength = 0;
    let currentInterval = intervals[0];
  
    for(let i = 1; i < intervals.length; i++) {
      const interval = intervals[i];
      
      if(interval[0] <= currentInterval[1]) {
        currentInterval[1] = Math.max(currentInterval[1], interval[1]);
      } else {
        totalLength += currentInterval[1] - currentInterval[0] + 1;
        currentInterval = interval;
      }
    }
    totalLength += currentInterval[1] - currentInterval[0] + 1;
  
    return totalLength;
  }