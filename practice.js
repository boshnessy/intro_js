// # Write a method that prints out every number from 1 to 100. 

function oneToOneHundred() {
  for (var i = 1; i <= 100; i++) {
    console.log(i);
  }
}

oneToOneHundred();

// # Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

function printEveryOther() {
  for (var i = 1; i < 100; i += 2) {
    console.log(i);
  }
}  

printEveryOther();

// # Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

function count(inputArray) {
  var sum = 0;
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === 55) {
      sum++;
    }
  }
  return sum;
}
console.log(count([3, 55, 2, 55, 643, 55]));

// # Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// # For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

function awesomesauced(inputArray) {
  var newArray = [];
  for (var i = 0; i < inputArray.length; i++) {
    newArray.push(inputArray[i]);
    if (i < inputArray.length - 1) {
      newArray.push("awesomesauce");
    }
  }
  return newArray;
}

console.log(awesomesauced(["a", "b", "c", "d", "e"]));

// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # Someone just bought two chairs. Change the hash such that the chair amount is 3.
// # The final result should be: {chair: 3, table: 2}

// var itemAmounts = {chair: 5, table: 2};
// itemAmounts.chair = 3;
// console.log(itemAmounts);

// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # You received 7 desks to sell. Change the hash to include desks.
// # The final result should be: {chair: 5, table: 2, desk: 7}

var itemAmounts = {chair: 5, table: 2};
itemAmounts.desk = 7;
console.log(itemAmounts);

// # Write a method that accepts a number and returns its factorial.
// # For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function factorial(inputNumber) {
  var total = 1;
  for (var i = 1; i <= inputNumber; i++) {
    total = total * i;
  }
  return total;
}

console.log(factorial(5));

// # Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// # For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

function sumCombinations(firstArray, secondArray) {
  var newArray = [];
  for (var i = 0; i < firstArray.length; i++) {
    for (var j = 0; j < secondArray.length; j++) {
      newArray.push(firstArray[i] + secondArray[j]);
    }
  }
  return newArray;
}

console.log(sumCombinations([1, 5, 10], [100, 500, 1000]));