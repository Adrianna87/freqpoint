// add whatever parameters you deem necessary
function createFrequencyCounter(array) {
  let frequencies = {};

  for (let val of array) {
    let valCount = frequencies[val] || 0;
    frequencies[val] = valCount + 1;
  }

  return frequencies;
};

function constructNote(msg, char) {
  let msgFreq = createFrequencyCounter(msg);
  let charFreq = createFrequencyCounter(char);

  for (let key in msgFreq) {
    if (!charFreq[key]) {
      return false
    }
    if (msgFreq[key] > charFreq[key]) {
      return false
    }
  }
  return true
}
