const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  const length = array.length;

  for (let i = 1; i < length; i++) {
    console.log(array);
    let j = i - 1;
    let k = i;
    while (j >= 0 && array[k] < array[j]) {
      console.log(i,j);
      let temp = array[j];
      array[j] = array[k];
      array[k] = temp;
      j--;
      k--;
    };
  };
}

console.log(insertionSort(numbers));
console.log(numbers);