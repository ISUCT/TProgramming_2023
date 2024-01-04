function digitalRoot(n) {
  if (n < 10) {
    return n
  }

  return digitalRoot(n.toString().split('').reduce((acc, cur) => acc + parseFloat(cur), 0))
}

digitalRoot()