// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.
// Pseudocode:
// input: string
// output: array of words with an odd number of characters
// function name: oddNumChar
    // convert string into an array
    // iterate through the array
    // check character count of each word
    // return array of the words with odd number of characters
// expected output: ["a", "wonderful", "ain't", "passing", "craze"]

const pumbaa = "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// output: ["a", "wonderful", "ain't", "passing", "craze"]

const oddNumChar = (string) => {
    let tempArr = string.split(" ")
    return tempArr.filter((value) => value.length % 2 != 0)
}

// console.log(oddNumChar(pumbaa));

