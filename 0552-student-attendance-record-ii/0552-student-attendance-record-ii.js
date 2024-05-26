/**
 * @param {number} n
 * @return {number}
 */
const memo = (fn) => {
  const map = new Map()
  return (...args) => {
    const key = JSON.stringify(args)
    if (map.has(key)) return map.get(key)
    return map.set(key, fn(...args)).get(key)
  }
}

const checkCanBeAbsent = absences => absences < 1
const tooManyAbsences = absences => absences >= 2

const checkCanBeLate = lates => lates < 2
const tooManyLates = lates => lates >= 3

const checkRecord = memo((n, totalAbsences = 0, consecutiveLates = 0) => {
  const canBeAbsent = checkCanBeAbsent(totalAbsences)
  const canBeLate = checkCanBeLate(consecutiveLates)

  if (tooManyLates(consecutiveLates)) return 0
  if (tooManyAbsences(totalAbsences)) return 0
  if (n === 1) return canBeAbsent && canBeLate ? 3 
    : canBeAbsent || canBeLate ? 2
    : 1
  
  const withLate = checkRecord(n - 1, totalAbsences, consecutiveLates + 1)
  const withAbsent = checkRecord(n - 1, totalAbsences + 1, 0)
  const withPresent = checkRecord(n - 1, totalAbsences, 0)
  
  return (withLate + withAbsent + withPresent) % 1000000007
})