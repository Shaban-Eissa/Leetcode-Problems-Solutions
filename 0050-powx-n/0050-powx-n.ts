function myPow(x: number, n: number): number {
  if (n === 0) return 1;

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  if (n % 2 === 0) {
    const half = myPow(x, Math.floor(n / 2));
    return half * half;
  } else {
    return x * myPow(x, n - 1);
  }
}