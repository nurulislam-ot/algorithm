function bubble_sort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

const arr = [2, 3, 8, 2, 6, 8, 4]
console.log(bubble_sort(arr))

/**
 * 2, 3, 8, 2, 6, 8, 4
 */
