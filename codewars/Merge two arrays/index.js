function mergeArrays(a, b) {
    let newArray = [];
    if (a.length > b.length) {

        for (let i = 0; i < a.length; i++) {
            if (a[i] !== undefined) {
                newArray.push(a[i])
            } 
            if (b[i] !== undefined) {
                newArray.push(b[i]) 
            } 
        }
    } else {
        for (let i = 0; i < b.length; i++) {
            if (a[i] !== undefined) {
                newArray.push(a[i])
            } 
            if (b[i] !== undefined) {
                newArray.push(b[i]) 
            } 
         }
    }
    return newArray
}