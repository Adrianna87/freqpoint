// add whatever parameters you deem necessary
function createFrequencyCounter(array) {
  let frequencies = {};

  for (let val of array) {
    let valCount = frequencies[val] || 0;
    frequencies[val] = valCount + 1;
  }

  return frequencies;
}

function twoArrayObject(keyArr, valArr) {
  let newObj = new Map();
  let keyObj = createFrequencyCounter(keyArr);
  let valObj = createFrequencyCounter(valArr);

  for (let key in keyArr) {


  }

}
