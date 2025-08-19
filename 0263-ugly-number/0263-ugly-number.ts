function isUgly(n: number): boolean {
  if (n === 0) return false;

  for (let factor of [2, 3, 5]) {
    while (n % factor === 0) {
      n = Math.floor(n / factor);
    }
  }

  return n === 1;
}
