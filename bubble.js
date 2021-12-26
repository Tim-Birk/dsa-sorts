function bubbleSort(data) {
  // Loop with i from end of array towards beginning
  for (let i = data.length; i > 0; i--) {
    // Loop with j from the beginning until i - 1
    for (let j = 0; j < data.length; j++) {
      // If data[j] is greater than data[j+1], swap those two values!
      if (data[j] > data[j + 1]) {
        [data[j], data[j + 1]] = [data[j + 1], data[j]];
      }
    }
  }
  return data;
}

module.exports = bubbleSort;
