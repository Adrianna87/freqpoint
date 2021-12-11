// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  let arr1 = str1.split('');
  let arr2 = str2.split('');

  let left1 = 0;
  let left2 = 0;

  while (left1 < arr1.length && left2 < arr2.length) {
    if (arr1[left1] === arr2[left2]) {
      left1++;
      left2++;
    } else left2++;
    if (left2 === arr2.length && left1 !== arr1.length) {
      return false
    }
  }
  return true
}
