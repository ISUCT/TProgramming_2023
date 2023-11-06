function digitalRoot(n){
  var str = '' + n;
  while(str.length > 1){
    var char = str.split('');
    var b = char.map(Number);
    let res = b.reduce(function(a,b){
      return(a + b);
    })
    str = res.toString(10);
    }
  if (str.length = 1){
    return parseInt(str, 10);
  } 
}
