// # Write a method that prints out every number from 1 to 100. 


// for (var i = 0; i < 101; i++) {
//   console.log(i);
// }

// # Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

// function printEveryOther() {
//   for (var i = 1; i < 100; i += 2) {
//     console.log(i);
//   }
// }  
// printEveryOther();

// # Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

function count(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 55) {
      sum += 1;
    }
    console.log(sum);
  }
}
count([3, 55, 2, 55, 643, 55]);

// # Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// # For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].