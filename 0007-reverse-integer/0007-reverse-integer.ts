function reverse(x: number): number {
  let digit = 0
  let rev = 0

  while (x !== 0) {
    digit = x % 10
    rev = rev * 10 + digit

    // Check for overflow
    if (rev > Math.pow(2, 31) - 1 || rev < Math.pow(-2, 31)) {
      return 0;
    }
    x = Math.trunc(x / 10);
  }
  return rev
};