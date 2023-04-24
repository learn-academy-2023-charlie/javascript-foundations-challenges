// 💻 Challenges

// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

const testArr1 = [3, 9, 15, 4, 10]

const multArray = (array) => {
    let res = []
    for (let i = 0; i < array.length; i++){
        res.push(array[i] * 3)
    }
    return res
}
// console.log(multArray(testArr1));
// // output: [9, 27, 45, 12, 30]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

const onlyOdd = (Array) => {
    let res = []
    for (let i = 0; i < Array.length; i++){
        if (Array[i] % 2 != 0)
            res.push(Array[i])
    }
    return res
} 
// console.log(onlyOdd(testArr2));
// // output: [-7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
const comboArr = [
  7,
  "n",
  true,
  "i",
  "c",
  10,
  "e",
  -388,
  "w",
  3,
  "o",
  0,
  "r",
  false,
  "k"
]

const onlyLetters = (array) => {
    let letters = []
    for (let i = 0; i < array.length; i++){
        if (typeof array[i] === 'string')
            letters.push(array[i])
    }
    return letters.join("")
}
console.log(onlyLetters(comboArr))

// // output: "nicework"
// Create a function that takes in an array of numbers and returns the sum.
const addThese1 = [1, 2, 3, 4]
const addThese2 = []

const totalNum = (array) =>{
    res = 0
    for (let i = 0; i < array.length; i++){
        res += array[i]
    }
    return res
}
// console.log(totalNum(addThese1))
// console.log(totalNum(addThese2))

// // output: 10
// // output: 0

// Create a function that takes in an array of numbers and returns the index of the largest number.

const indexHighestNumber = [1, 4, 2, 3]

const largeNum = (array) => {
    let res = 0
    for (let i = 0; i < array.length; i++){
        for (let s = 1; i < array.length; i++){
            if(array[i] <= array[s])
            res = s
            else {
                res =i
            }
        }
    }return res     
}
console.log(largeNum(indexHighestNumber));

// // output: 1
// 🏔 Stretch Goals

// Create a function that takes in two arrays and returns one array with no duplicate values.
const arr1 = [3, 7, 10, 5, 4, 3, 3]
const arr2 = [7, 8, 2, 3, 1, 5, 4]

const unique = (arr1,arr2) => {
    return new Set(arr1+arr2)
}

console.log(unique(arr1,arr2))
// // output: [3, 7, 10, 5, 4, 8, 2, 1]

// // Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// const arrayLength = 6
// const arrayValue = 0
const arrayLength = 4
const arrayValue = 11
// output: [11, 11, 11, 11]

const stretch = (num1,num2) =>{
    let res = []
    for (let i = 0; i< num1; i++){
        res.push(num2)
    }
    return res
}
console.log(stretch(arrayLength,arrayValue))
// // output: [0, 0, 0, 0, 0, 0]

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// // 1 + 2 + 3 + 4 = 10
const addUp1 = 4
// // output: 10
const addUp2 = 10
// // output: 55
const addUp3 = 600
// // output: 180300

const addy =(num1) =>{
    let res = 0
    for (let i = 1; i < num1 + 1; i++){
        res += i
    }
    return res
}
console.log(addy(addUp1));
console.log(addy(addUp2));
console.log(addy(addUp3));


// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55

// 🏔 Epic Goals

// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
// Create an HTML page and link your JavaScript file. More info here.
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// As a user, I can see if my guess is too high or too low.
// As a user, if I guess the "answer" correctly I am notified that I won.
// As a user, I can continue to guess the "answer" until I am correct.
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.
