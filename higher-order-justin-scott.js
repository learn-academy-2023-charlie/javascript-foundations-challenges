// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]
// Pseudocode
// input: array of numbers
// output: array with all numbers x 10
// create function named mult10
// use .map()to iterate through the old array and create a new array
// return statement with multiplier
// console log new array

const mult10 = (array) => {
    return array.map((value) => value * 10)
  }
  
  console.log(mult10(arr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13]
// // output: [7, 3, 5, 13]
// Pseudocode
// input: array of numbers
// output: array with only odd numbers
// use .filter to create a subset of only odd numbers in the array
// return statement 
// console log new array with only odd numbers

const oddArray = (array) => {
    return array.filter((value) => value % 2 === 1 )
  }
  
  console.log(oddArray(arr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"
//Pseudocode
// create a function that takes in an array
// create a array
// use typeOf built in method 
// expected output "n," "i", "c", "e", "w", "o", "r", "k"

const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"];

const lettersArray = (array) => {
  return array.filter((value) => typeof value === "string").join("");
}

const lettersOnly = lettersArray(comboArr);
console.log(lettersOnly);

//output is nicework


const filterArrayValues = [58, "", "abcd", true, null, false, 0];

const filterTruthyValues = (array) => {
  return array.filter((value) => value); // returns truthy values only
}


console.log(filteredArray); // [58, "abcd", true]


//pseudocode
// create a function that takes in an array
// use the .filter built in method 
