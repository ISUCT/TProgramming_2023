function build (pyramidHeight) {
    for (let i = 1; i <= pyramidHeight; i++) {
      let row = '';
      for(let j = 1; j <= (pyramidHeight - i); j++) {
        row += ' ';
      }
      for(let k = 1; k <= (2 * i - 1); k++) {
        row += '*';
      }
      console.log(row);
    }
  }
    
  console.log(build(5))

