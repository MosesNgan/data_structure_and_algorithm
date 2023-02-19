const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    let smallest = array[i];
    let indexOfSmallest = i;
    for (let j = i; j < length; j++) {
      if (array[j] < smallest) {
        smallest = array[j];
        indexOfSmallest = j;
      }
    };

    array[indexOfSmallest] = array[i];
    array[i] = smallest;
  };

}

console.log(selectionSort(numbers));
console.log(numbers);