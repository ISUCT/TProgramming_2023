var curr_prefix = ''
var n_m = {}
function flattenMap(map) {
    for (obj in map){
        if (map[obj].constructor === Object){
            if (curr_prefix.length == 0){
                curr_prefix += obj
            } else{
                curr_prefix += '/' + obj
            }
            flattenMap(map[obj])
            curr_prefix = curr_prefix.slice(0, curr_prefix.length - 2)
        } else {
            curr_prefix += '/' + obj
            n_m[curr_prefix] = map[obj]
            if (curr_prefix.length > 1){
                curr_prefix = curr_prefix.slice(0, curr_prefix.length - 2)
            } else {
                console.log('smt went wrong')
            }
        }
    }
    return n_m
  }