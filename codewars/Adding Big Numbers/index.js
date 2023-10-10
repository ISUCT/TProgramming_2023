function add(a, b) {

    a = Array.from(a).reverse()
    b = Array.from(b).reverse()
    
    for (let count = 0; count < b.length; count++) {
      if ((a[count] = ~~a[count] + ~~b[count]) > 9) {
        b[count+1] = ~~b[count+1] + 1
        a[count] -= 10
      }
    }
    return a.reverse().join("")
}