function flattenMap(map) {
  const resObj = {}

  if (Object.keys(map).length === 0) return {}

  const recurseMap = (obj, path) => {

    if (Array.isArray(obj) || obj === null) {
      resObj[path.join('/')] = obj
    }

    else {
      for (const key in obj) {
        const newPath = path.concat(key)
        if (typeof obj[key] === 'object') {
          recurseMap(obj[key], newPath);
        } else {
          resObj[newPath.join('/')] = obj[key]
        }
      }
    }
  }

  recurseMap(map, [])

  return resObj
}

flattenMap()