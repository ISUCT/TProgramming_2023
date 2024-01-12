function deepCount(a){
    var counter = 0

    function recursive(a){
        for (var i = 0; i < a.length; i++){
            if (Array.isArray(a[i])){
                counter++
                recursive(a[i])
            } else {
                counter++
            }
        }
    }

    recursive(a)
    return counter
}

console.log(deepCount(["x", "y", ["z"]]))
