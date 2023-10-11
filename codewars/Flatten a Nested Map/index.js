function flattenMap(map) {
    return result(map, "", {})
}
function result(object, current, response) {
    if (Object.prototype.toString.call(object)!=="[object Object]") {
      response[current.substring(1)]=object
      return
    }
    for (let count of Object.keys(object)) {
      result(object[count], current+"/"+count, response)
    } 
    return response
}