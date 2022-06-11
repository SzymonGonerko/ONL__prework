const pureNumber = '3.14';
const numberWithString = '3.14SomeStringHere';
const stringWithoutNumber = 'NoNumberHere';
const alreadyNumber = 3.14;

// Poniżej użyj metod z zadania - każdej do przekonwertowania każdej z powyższych stałych.
// Obserwuj różnice w rezultatach

console.log('---PONIŻEJ parseFloat: ---');

console.log(parseFloat(pureNumber))
console.log(parseFloat(numberWithString))
console.log(parseFloat(stringWithoutNumber))
console.log(parseFloat(alreadyNumber))


console.log('---PONIŻEJ parseInt: ---');

console.log(parseInt(pureNumber))
console.log(parseInt(numberWithString))
console.log(parseInt(stringWithoutNumber))
console.log(parseInt(alreadyNumber))


console.log('---PONIŻEJ konstruktor new Number(): ---');

const myNum = new Number()
myNum.first = 2

console.log(parseFloat(myNum.first))
console.log(parseInt(myNum.first))


// Poniżej źle działająca funkcja. Spróbuj naprawić ją tak, żeby działała dla wszystkich numerów
function addToNum(num) {
  if (!num) {
    throw new Error('Passed variable is not a number!')
  }

  return num + (num * 10);
}

addToNum(2);
addToNum(1);
addToNum(-1);
