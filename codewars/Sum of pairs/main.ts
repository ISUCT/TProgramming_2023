// This implementation uses a set to store previously seen numbers while iterating through the list. 
// It checks if the complement of the current number (i.e., the difference between the target sum and the current number) has been seen before. 
// If so, it returns the pair of numbers. If no pair is found, it returns undefined.

export function sumPairs(ints: number[], s: number): [number, number] | void {
    const seenNumbers: Set<number> = new Set<number>();

    for (const num of ints) {
        const complement = s - num;
        if (seenNumbers.has(complement)) {
            return [complement, num];
        }
        seenNumbers.add(num);
    }

    return undefined;
}


// Лучшее решение

// export function sumPairs(ints: number[], s: number): [number, number] | void {  
//     const seen = new Set();
//     for (const n of ints) {
//       if (seen.has(s - n)) return [s - n, n];
//       seen.add(n);
//     }
//   }


console.log(sumPairs([11, 3, 7, 5], 10), "/ [3, 7]")
console.log(sumPairs([4, 3, 2, 3, 4], 6), "/ [4, 2]")
console.log(sumPairs([0, 0, -2, 3], 2), "/ undefined")
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10), "/ [3, 7]")
console.log(sumPairs([1, 4, 8, 7, 3, 15], 8), "/ [1, 7]")
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6), "/ [0, -6]")
console.log(sumPairs([0, 2, 0], 0), "/ [0, 0]")