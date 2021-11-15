function bubbleSort(array) {
  let arr = array.slice();
  let length = arr.length - 1;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

console.log(bubbleSort([1, 4, -7, 4, 8, 21, 8, -1, -3, 3]));
