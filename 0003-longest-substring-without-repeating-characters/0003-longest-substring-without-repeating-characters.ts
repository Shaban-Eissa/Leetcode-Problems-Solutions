function lengthOfLongestSubstring(s: string): number {
  let map = new Map()
  let left = 0
  let MaxLength = 0
  for (let right = 0; right < s.length; right++) {
    let char = s[right]
    if (map.has(char) && map.get(char) >= left) {
      left = map.get(char) + 1
    }

    map.set(char, right)
    MaxLength = Math.max(MaxLength, right - left + 1)
  }
  return MaxLength
};