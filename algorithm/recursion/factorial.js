const findFactorialRecursive = (num) => {

  if (num == 1) {
    return num;
  }
  return num * findFactorialRecursive(num - 1);
  // num--;
  // return

};

const findFactorialIterative = (num) => {
  let answer = 1;

  while (num > 0) {
    answer *= num;
    num--;
  };
  return answer;
};

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));
