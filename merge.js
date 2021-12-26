function merge(arrA, arrB) {
  // Create empty out array
  const emptyOut = [];
  // Start pointers at beginnings of arrays a and b
  let a = 0;
  let b = 0;

  while (a < arrA.length && b < arrB.length) {
    // If a value <= b value, push a value to out & increase a pointer
    if (arrA[a] <= arrB[b]) {
      emptyOut.push(arrA[a]);
      a++;
    } else {
      // Else, push b value to out & increase b pointer
      emptyOut.push(arrB[b]);
      b++;
    }
  }

  // Once we exhaust one array, push all remaining values from other array
  while (a < arrA.length) {
    emptyOut.push(arrA[a]);
    a++;
  }

  while (b < arrB.length) {
    emptyOut.push(arrB[b]);
    b++;
  }

  return emptyOut;
}

function mergeSort(data) {
  if (data.length <= 1) return data;
  // Recursively:
  // Split array into halves until you have arrays that have length of 0 or 1
  const middleIdx = Math.floor(data.length / 2);
  // Merge split arrays and return the merged & sorted array
  const arrA = mergeSort(data.slice(0, middleIdx));
  const arrB = mergeSort(data.slice(middleIdx));

  return merge(arrA, arrB);
}

module.exports = { merge, mergeSort };
