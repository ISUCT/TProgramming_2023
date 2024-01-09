function mergeArrays(a, b) {
    var res = [];
     var maxLength = 0;
     if (a.length>b.length) {
         maxLength = a.length;
     } else {
         maxLength = b.length;
     } 
     for (let index = 0; index < maxLength; ++index){
         if (index < a.length){
             res.push(a[index]);
         }
         if (index < b.length){
             res.push(b[index]);
         }
     }
     return res;
}