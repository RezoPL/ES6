//zadanie 1
const hello = 'Hello';
const world = 'Worls';
const greeting = `${hello} ${world}`;
console.log = (greeting);

//zadanie 2
const multiply = (x, y = 1 => x * y);
console.log = (multiply(2, 5));
console.log = (multiply(6, 6));

//zadanie 3
const average = (...args) => args.reduce((a, b) => a + b)/args.length;
console.log(average(1)); 
console.log(average(1, 3)); 
console.log(average(1, 3, 6, 6));

//zadanie 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

//zadanie 5
const collection = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstname, , lastname] = collection;

console.log(firstname);
console.log(lastname);