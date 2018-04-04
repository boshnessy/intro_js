// // # Write a method that prints out every number from 1 to 100. 

// function oneToOneHundred() {
//   for (var i = 1; i <= 100; i++) {
//     console.log(i);
//   }
// }

// oneToOneHundred();

// // # Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

// function printEveryOther() {
//   for (var i = 1; i < 100; i += 2) {
//     console.log(i);
//   }
// }  

// printEveryOther();

// // # Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

// function count(inputArray) {
//   var sum = 0;
//   for (var i = 0; i < inputArray.length; i++) {
//     if (inputArray[i] === 55) {
//       sum++;
//     }
//   }
//   return sum;
// }
// console.log(count([3, 55, 2, 55, 643, 55]));

// // # Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// // # For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

// function awesomesauced(inputArray) {
//   var newArray = [];
//   for (var i = 0; i < inputArray.length; i++) {
//     newArray.push(inputArray[i]);
//     if (i < inputArray.length - 1) {
//       newArray.push("awesomesauce");
//     }
//   }
//   return newArray;
// }

// console.log(awesomesauced(["a", "b", "c", "d", "e"]));

// // # Start with the hash: item_amounts = {chair: 5, table: 2}
// // # Someone just bought two chairs. Change the hash such that the chair amount is 3.
// // # The final result should be: {chair: 3, table: 2}

// // var itemAmounts = {chair: 5, table: 2};
// // itemAmounts.chair = 3;
// // console.log(itemAmounts);

// // # Start with the hash: item_amounts = {chair: 5, table: 2}
// // # You received 7 desks to sell. Change the hash to include desks.
// // # The final result should be: {chair: 5, table: 2, desk: 7}

// var itemAmounts = {chair: 5, table: 2};
// itemAmounts.desk = 7;
// console.log(itemAmounts);

// // # Write a method that accepts a number and returns its factorial.
// // # For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// function factorial(inputNumber) {
//   var total = 1;
//   for (var i = 1; i <= inputNumber; i++) {
//     total = total * i;
//   }
//   return total;
// }

// console.log(factorial(5));

// // # Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// // # For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

// function sumCombinations(firstArray, secondArray) {
//   var newArray = [];
//   for (var i = 0; i < firstArray.length; i++) {
//     for (var j = 0; j < secondArray.length; j++) {
//       newArray.push(firstArray[i] + secondArray[j]);
//     }
//   }
//   return newArray;
// }

// console.log(sumCombinations([1, 5, 10], [100, 500, 1000]));

// Equality check
// var x = 10;
// if (x === "10") {
//   console.log("equal");
// } else {
//   console.log("not equal");
// }

// Falsey Values
// var x = 3;
// if (null) {
//   x += 1;
// }
// if (false) {
//   x += 1;
// }
// if (0) {
//   x += 1;
// }
// if ("") {
//   x += 1;
// }
// console.log(x);

// // Functions
// function printLyrics() {
//   console.log("Now this is a story all about how");
//   console.log("My life got flipped turned upside down");
//   console.log("And I'd like to take a minute, just sit right there");
//   console.log("I'll tell you how I became the prince of a town called Bel-Air");
// }

// printLyrics();

// // Scope
// var x = 100;
// function addOne(num) {
//   x = 1;
//   return num + x;
// }

// console.log(x);
// console.log(addOne(5));
// console.log(x);

// JavaScript objects vs. Ruby classes
// var boat = {name: "S. S. Minnow", color: "white", price: 20000};

// console.log(boat);
// console.log(boat.name);
// boat.color = "red";
// console.log(boat.color);
// console.log(boat);

// Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is [“a”, “b”, “c”, “d”, “e”, “f”], the output should be [“a”, “c”, “e”].

// function selectEvenItems(strings) {
//   var newArray = [];
//   for (var i = 0; i < strings.length; i += 2) {
//     newArray.push(strings[i]);
//   }
//   return newArray;
// }
// console.log(selectEvenItems(["a", "b", "c", "d", "e", "f"]));

// Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

// function max(numbers) {
//   var currentMax = numbers[0];
//   for (var i = 0; i <= numbers.length; i++ ) {
//     if (numbers[i] > currentMax) {
//       currentMax = numbers[i];
//     }
//   }
//   return currentMax;
// }

// console.log(max([5, 4, 8, 1, 2]));

// # Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// function factorial(number) {
//   var result = 1;
//   var currentNumber = number;
//   for (var i = 0; i < number; i++) {
//     result = result * currentNumber;
//     currentNumber--;
//   }
//   return result;
// }
// console.log(factorial(5));

// Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built in to Ruby.

// function descending(numbers) {
//   var result = [];
//   for (var i = numbers.length - 1; i >= 0; i--) {
//     result.push(numbers[i]);
//   }
//   return result;
// }
// console.log(descending([1, 3, 5, 7]));

// Write a method that accepts two arrays of numbers, and returns an array of every sum of every combination of single numbers from first and second array. For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should return this array: [101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

// function sumCombinations(numbers1, numbers2) {
//   var result = [];
//   for (var i = 0; i <= numbers1.length - 1; i++) {
//     for (var j = 0; j <= numbers2.length - 1; j++) {
//       result.push(numbers1[i] + numbers2[j]);
//     }
//   }
//   return result;
// }
// console.log(sumCombinations([1, 5, 10], [100, 500, 1000]));