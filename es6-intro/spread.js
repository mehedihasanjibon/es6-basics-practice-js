const max = Math.max(12, 85, 999, 78);
// console.log(max);

const numbers = [12, 85, 999, 78];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

const number2 = [...numbers];
numbers.push(55);
number2.push(7777);
console.log(numbers);
console.log(number2);

const number3 =[...numbers];
const number4 = [444, 78, ...numbers, 111, 33];
console.log(number4);