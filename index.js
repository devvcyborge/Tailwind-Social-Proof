// MY JS LEARNING

//  data types

// String
console.log("Hello World!");
console.log("22");

// number
console.log(22);
console.log(30 < 10);

// variables

let firstname = "Cyfher";
console.log(firstname);

firstname = "Diola";

console.log(firstname);

// Conditionals examples also public variables

// let samsungPhone = 500;
// let iphonePrice = 400;
// let Tecno = 150;
// let itelPrice = 90;
// let balance = 10;

// if (balance >= samsungPhone) {
//   console.log("you can buy a samsung");
// } else if (balance >= iphonePrice) {
//   console.log("you can buy an iphone");
// } else if (balance > Tecno) {
//   console.log("you can buy an Tecno");
// } else if (balance > itelPrice) {
//   console.log("you can buy an itel");
// } else {
//   console.log("your money can not buy any phone");
// }

// increment

let a = 20;
let b = a++;
console.log(b);

// && AND Operator

let club1 = 50;
let club2 = 30;

let player1 = 7;
let player2 = 4;

if (club1 > club2 && player1 > player2) {
  console.log("Chelsea is better than united and Messi born Ronaldo");
}

// this is FALSE but apply BODMAS and add !
if (!(2 > 2 && 8 * 1 != 8)) {
  console.log("heyyy");
}

// rewrite using $$ and || operator
let samsungPhone = 100;
let iphonePrice = 400;
let Tecno = 150;
let itelPrice = 90;
let balance = 100;

if (balance < samsungPhone || iphonePrice) {
  console.log("you can buy another phone");
} else if (balance > itelPrice) {
  console.log("you can buy an itel");
} else if (balance > Tecno) {
  console.log("you can buy an Tecno");
} else if (balance > itelPrice) {
  console.log("you can buy an itel");
} else {
  console.log("your money can not buy any phone");
}

//  ARRAYS []
const fruit = ["cherry", "apple", "mango"];
console.log(fruit.length);

//  push to the last element
fruit.push("pawpaw", "lemon");
console.log(fruit.length);

// Push to the first element
fruit.unshift("berry", "orange");
console.log(fruit);

// remove last element
fruit.pop();
console.log(fruit);

// remove first element
fruit.shift();
console.log(fruit);

//  get access to element via index
console.log(fruit.at(4));

// using forbidden delete

delete fruit[2];
console.log(fruit);

// changing element index
const item = ["gold", "silver", "diamond", "petals"];
item[0] = "watch";
console.log(item);

// joining two Array (concat)

// const test = fruit.concat(item);
// console.log(test);

// join using the spread METHOD

const test = [...fruit, ...item];
console.log(test);

// const months = ["Jan", "Feb", "Mar", "Apr"];
// const sorted = months.toSorted();
// console.log(months);

//  Array indexOf()
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1;
console.log(position);

//  OBJECT {}

const person1 = {
  name: "cyfher",
  height: "5.9",
  color: "fair",
};

const person2 = {
  name: "Diola",
  height: "5.4",
  color: "fair",
};

// Using Destructuring

const { name: name1, height: height1, color: color1 } = person1;

// name, height and color has already being declare
// now change the existing name using ":"
const { name, height, color } = person2;

console.log(color1, name);

//   Object example console
// console.log(person1.name);
// console.log(person2.name);

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//  for loop

for (let index = 0; index < 9; index++) {
  number[0];
  console.log(number[index]);
}

//For Loop  for "ODD" and "EVEN" Numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let index = 0; index < numbers.length; index++) {
  numbers[index];
  if (numbers[index] % 2 == 1) {
    console.log(`This index ${numbers[index]} is odd`);
  } else {
    console.log(`This index ${numbers[index]} is even`);
  }
}

//For Loop for Prime Numbers using || OR Operator

const numberss = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const prime = [2, 3, 5, 7, 11, 13, 17, 19];

for (let index = 0; index < numberss.length; index++) {
  if (prime.includes(numberss[index])) {
    console.log(`This index ${numberss[index]} is a prime number`);
  } else {
    console.log(`This index ${numberss[index]} is not a prime number`);
  }
}

// loop cyfher_lexx 10 times
for (let i = 0; i < 10; i++) {
  console.log("Cyfher_Lexx", i);
}

//FUNCTION
function first() {
  console.log("first is known");
}

//Calling the functon
first();
first();
first();
