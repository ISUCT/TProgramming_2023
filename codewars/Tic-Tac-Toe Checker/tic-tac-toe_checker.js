function isSolved(board) {
    for (let i = 0; i <= 2; i++) {
      if (board[i][0] == board[i][1] && board[i][0] == board[i][2] && board[i][0] != 0) {
        return board[i][0];
      }   
    }
    
    let arr = board[0].concat(board[1], board[2]);
    
    for (let i = 0; i <= 2; i++) {
      if (arr[i] == arr[i+3] && arr[i] == arr[i+6] && arr[i] != 0) {
        return arr[i];
      }
    }
    
    if (arr[0] == arr[4] && arr[0] == arr[8] && arr[0] != 0) {
      return arr[0];
    }
  
    if (arr[2] == arr[4] && arr[2] == arr[6] && arr[2] != 0) {
      return arr[2];
    }        
    
    if (arr.includes(0)) {
      return -1;
    } else {
      return 0;
    }  
  }