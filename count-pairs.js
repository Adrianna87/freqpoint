// add whatever parameters you deem necessary
function countPairs(arr, num) {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;

  let correct = 0;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (num === sum) {
      correct++
      left++
      right--
    } else if (sum < num) {
      left++
    } else {
      right--
    }
  }
  return correct
}
