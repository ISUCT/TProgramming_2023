function digitalRoot(n, res = 0) {
    for (var index = 0; index < n.toString().length; index++){
      res = res + Math.trunc((n % (Math.pow(10, index + 1)) / Math.pow(10, index)))
    }
    if (res.toString().length > 1) {
      res = digitalRoot(res)
    }
    return res;
  }