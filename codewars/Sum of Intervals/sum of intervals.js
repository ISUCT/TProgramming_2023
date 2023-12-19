function sumIntervals(intervals) {
    // Объединение перекрывающихся интервалов
    intervals.sort((a, b) => a[0] - b[0]);

    let merged = [];
    for (let i = 0; i < intervals.length; i++) {
        if (merged.length === 0 || merged[merged.length - 1][1] < intervals[i][0]) {
            merged.push(intervals[i]);
        } else {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], intervals[i][1]);
        }
    }

    // Вычисление суммы длин интервалов
    let sum = 0;
    for (let i = 0; i < merged.length; i++) {
        sum += merged[i][1] - merged[i][0];
    }

    return sum;
}