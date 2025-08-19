function modPow(a: number, k: number, mod: number): number {
  a %= mod;
  let result = 1;
  for (let i = 0; i < k; i++) {
    result = (result * a) % mod;
  }
  return result;
}

function superPow(a: number, b: number[]): number {
  const MOD = 1337;
  if (b.length === 0) return 1;

  // Step 1: peel off last digit
  const d = b.pop()!;

  // Step 2: recursion on the rest
  const part1 = modPow(superPow(a, b), 10, MOD);
  const part2 = modPow(a, d, MOD);

  // Step 3: combine
  return (part1 * part2) % MOD;
}