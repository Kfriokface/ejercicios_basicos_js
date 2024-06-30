const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  total = 0;
  for (let number of numberList) {
    total += number;
  }
  console.log(total);
}

sumNumbers(numbers);