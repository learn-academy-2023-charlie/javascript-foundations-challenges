//Functions, Loops and Arrays 4/24/23 Will and C Rod challenge

// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
//Pseudo Code
// input: array of numbers
// output: array values multiplied by 3
//process: create a function called multiArr with parameter array 
//within multiArr create a for loop that iterates through the array parameter
//create new temp variable newArr that stores the indexed values
//return newArr with values multiplied by 3 

const testArr1 = [3, 9, 15, 4, 10]
// // output: [9, 27, 45, 12, 30]

const multiArr =(array) => {
    let newArr = []
    for (let i = 0; i < array.length; i++){
        newArr.push(array[i]*3)
    }
    return newArr
}
// console.log(multiArr(testArr1))


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
//Pseudo Code
//input: array of numbers
//output: new array with only odd numbers
//process: 
    // create a func called oddNums with paramenter array
    // create temp val newArr
    // within oddNums, create a for loop to iterate through the given array
    // use a comparison operator to determine whether or not the value is odd
    // store the odd numbers in newArr
    // return newArr


const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// output: [-7, 3, 5, 13]

const oddNums = (array) => {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            newArr.push(array[i])
        }
    }

    return newArr
}

// console.log(oddNums(testArr2));


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
// const comboArr = [
//   7,
//   "n",
//   true,
//   "i",
//   "c",
//   10,
//   "e",
//   -388,
//   "w",
//   3,
//   "o",
//   0,
//   "r",
//   false,
//   "k"
// ]
// // output: "nicework"

// Create a function that takes in an array of numbers and returns the sum.
// const addThese1 = [1, 2, 3, 4]
// // output: 10

// const addThese2 = []
// // output: 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
// const indexHighestNumber = [1, 4, 2, 3]
// // output: 1
