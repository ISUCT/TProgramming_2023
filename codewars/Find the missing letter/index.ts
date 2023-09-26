export function findMissingLetter(array:string[]):string
{
  var lastAscii = array[0].charCodeAt(0)

    for (let index = 1; index < array.length; index++) {
        const element = array[index];

        if (element.charCodeAt(0) != lastAscii + 1) {
            return String.fromCharCode(element.charCodeAt(0) - 1)
        }
        lastAscii = element.charCodeAt(0)
    }
    return "None"
}