"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumOfIntervals = void 0;
function sumOfIntervals(intervals) {
    // Сортировка интервалов
    intervals.sort(function (a, b) { return a[0] - b[0]; });
    var sum = 0;
    var currentInterval = intervals[0];
    for (var i = 1; i < intervals.length; i++) {
        var interval = intervals[i];
        if (currentInterval[1] >= interval[0]) {
            // Пересекающиеся интервалы, при необходимости обновляем конечное значение
            currentInterval[1] = Math.max(currentInterval[1], interval[1]);
        }
        else {
            // Найден непересекающийся интервал, прибавьте его длину к сумме
            sum += currentInterval[1] - currentInterval[0];
            currentInterval = interval;
        }
    }
    // Прибавьте к сумме длину последнего интервала
    sum += currentInterval[1] - currentInterval[0];
    return sum;
}
exports.sumOfIntervals = sumOfIntervals;
console.log(sumOfIntervals([
    [1, 2],
    [6, 10],
    [11, 15]
]));
console.log(sumOfIntervals([
    [1, 4],
    [7, 10],
    [3, 5]
]));
console.log(sumOfIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11]
]));
console.log(sumOfIntervals([
    [0, 20],
    [-100000000, 10],
    [30, 40]
]));
