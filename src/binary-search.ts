const arr = [-1, 0, 3, 5, 9, 12]

function find(numbers: number[], target: number) {
  let begin = 0
  let end = numbers.length - 1

  while (begin <= end) {
    let mid = Math.floor((begin + end) / 2)
    if (target === numbers[mid]) return mid
    else if (target > numbers[mid]) begin = mid + 1
    else if (target < numbers[mid]) end = mid - 1
    else return -1
  }

  if (begin > end) return -1
}

console.log(find(arr, 3))

/**
 * 1, 2, 3, 4, 5, 6, 7
 */
