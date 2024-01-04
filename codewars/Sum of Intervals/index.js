function sumIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0])

  let mergedIntervals = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i]
    const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1]

    if (currentInterval[0] <= lastMergedInterval[1]) {
      lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1])
    } else {
      mergedIntervals.push(currentInterval)
    }
  }

  let totalLength = 0;
  for (const interval of mergedIntervals) {
    totalLength += interval[1] - interval[0]
  }

  return totalLength
}

sumIntervals()