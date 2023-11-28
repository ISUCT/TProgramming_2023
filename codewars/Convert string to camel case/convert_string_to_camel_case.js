function toCamelCase(str){
    let res = Array.from(str); 
    for (let i = 0; i < res.length; i++) { 
      if (res[i] === '-' || res[i] === '_') {
        res.splice(i, 2, res[i+1].toUpperCase());
      }
    }
    let str1 = res.join('');
    return str1;
    }