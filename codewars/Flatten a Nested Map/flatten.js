function flattenMap(map, parentKey = '') {
    let flatMap = {};
    
    for (let key in map) {
      if (typeof map[key] === 'object') {
        let nestedMap = flattenMap(map[key], parentKey + key + '/');
        flatMap = { ...flatMap, ...nestedMap };
      } else {
        flatMap[parentKey + key] = map[key];
      }
    }
    
    return flatMap;
  }
  
  
  let hierarchicalMap = {
    prop1: 'value1',
    prop2: {
      nestedProp1: 'value2',
      nestedProp2: {
        deeplyNestedProp: 'value3'
      }
    }
  };
  
  let flatMap = flattenMap(hierarchicalMap);
  console.log(flatMap);
