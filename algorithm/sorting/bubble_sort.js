const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  let i = 0;
  let endIndex = array.length - 1;
  let temp = 0;

  while (endIndex > 0) {
    for (let i = 0; i <= endIndex; i++) {
      if (array[i] > array[i + 1]) {
        temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
      }
    }

    endIndex--;
  }
}

bubbleSort(numbers);
console.log(numbers);