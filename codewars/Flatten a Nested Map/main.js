function flattenMap(map, prefix = '', result = {}) {
    for (let i in map) {
        const value = map[i];
        let newKey
        if (prefix) {
            newKey = prefix + '/' + i
        } else {
            newKey = i
        }

        if (value && typeof value === 'object' && !Array.isArray(value)) {
            flattenMap(value, newKey, result);
        } else {
            result[newKey] = value;
        }
    }
    return result;
}

console.log(flattenMap({
    'a': {
        'b': {
            'c': 12,
            'd': 'Hello World'
        },
        'e': [1, 2, 3],
        'v': true,
        'r': null,
        'n': [],
        'A': {
            'h': {
                'OOOO': {
                    'lol': false
                }
            }
        }
    }
}))