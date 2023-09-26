export function sumOfIntervals(intervals: number[][]): number {
    // Сортировка интервалов
    intervals.sort((a, b) => a[0] - b[0]);

    let sum = 0;
    let currentInterval = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i];
        if (currentInterval[1] >= interval[0]) {
            // Пересекающиеся интервалы, при необходимости обновляем конечное значение
            currentInterval[1] = Math.max(currentInterval[1], interval[1]);
        } else {
            // Найден непересекающийся интервал, прибавьте его длину к сумме
            sum += currentInterval[1] - currentInterval[0];
            currentInterval = interval;
        }
    }
    // Прибавьте к сумме длину последнего интервала
    sum += currentInterval[1] - currentInterval[0];
    return sum;
}


console.log(sumOfIntervals([
    [1, 2],
    [6, 10],
    [11, 15]
]));

console.log(sumOfIntervals([
    [1, 4],
    [7, 10],
    [3, 5]
]))

console.log(sumOfIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11]
]))

console.log(sumOfIntervals([
    [0, 20],
    [-100000000, 10],
    [30, 40]
]))