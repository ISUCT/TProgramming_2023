snail = function(array) {
    var steps = (array.length - 1) * 2 + 1
    if (array[0].length == 0){
        steps = 0
    }
    return SnailNewCycle(array, steps)
}

function SnailNewCycle(array, steps, cycle = 0, res = []) {
    for (let index = 0; index < 4; index++) {
        if (steps > 0) {
            let sus = MoveHorisontally(array, cycle, array.length - cycle, cycle)
            if (sus.length > 1 && steps > 1){
                sus.pop()
            }
            res.push(sus)
            steps--
            array = Rotate2dArray(array)
        }
    }
    if (steps > 0) {
        return SnailNewCycle(array, steps, cycle + 1, res)
    } else {
        return flatten(res)
    }
}

function flatten(ary) {
    var ret = [];
    for(var i = 0; i < ary.length; i++) {
        if(Array.isArray(ary[i])) {
            ret = ret.concat(flatten(ary[i]));
        } else {
            ret.push(ary[i]);
        }
    }
    return ret;
}

function Rotate2dArray(array2d) {
    result = []
    for (let index = array2d[0].length - 1; index >= 0; index--) {
        var verticalSlice = []
        for (let index1 = 0; index1 < array2d.length; index1++) {
            const element = array2d[index1][index];
            verticalSlice.push(element)
        }
        result.push(verticalSlice)
    }
    return result
}

function MoveHorisontally(array, offsetStart, offsetEnd, i) {
    var res = []
    for (let index = offsetStart; index < offsetEnd; index++) {
        const element = array[i][index];
        res.push(element)
    }
    return res
}