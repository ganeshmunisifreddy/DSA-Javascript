function insertionSort(array) {
  let arr = array.slice();

  for (var i = 1; i < arr.length; i++) {
    for (var j = i; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
}

console.log(insertionSort([6, 3, 5, -7, 8, -9, 12, -1, 4, 2]));
