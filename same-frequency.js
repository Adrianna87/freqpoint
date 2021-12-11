// add whatever parameters you deem necessary
function createFrequencyCounter(array) {
  let frequencies = {};

  for (let val of array) {
    let valCount = frequencies[val] || 0;
    frequencies[val] = valCount + 1;
  }

  return frequencies;
}

function sameFrequency(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();
  if (str1.length !== str2.length) return false;

  let num1Freq = createFrequencyCounter(str1);
  let num2Freq = createFrequencyCounter(str2);


  for (let num in num1Freq) {
    if (!num2Freq[num]) {
      return false
    }
  }
  return true
}
