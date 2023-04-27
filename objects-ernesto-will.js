const person = {
    firstName: "Arthur",
    lastName: "Dent"
  }

// Write the code that accesses the first name of the person object.

// console.log(person.firstName);
// output: "Arthur"



// Write the code that accesses the last name of the person object.

// console.log(person.lastName);
// output: "Dent"



// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.

Object.assign(person, {homePlanet: "Earth"})
// console.log(person);
// output: { firstName: 'Arthur', lastName: 'Dent', homePlanet: 'Earth' }



// Update the person object with a method that logs "Arthur Dent is from planet Earth".

Object.assign(person, {makeASentence: function(){
    return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
}})

// console.log(person.makeASentence());
// Arthur Dent is from planet Earth





const product = {
  name: "chair",
  price: 24.99
}

// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
// PseudoCode:
  // input: object
  // output: a string
  // function name: describeProduct
  // method: take an object and output a string using string interpolation to make a dynamic code

  const describeProduct = (object) => {
    return `The product is a ${object.name}. It costs $${object.price}.`
  }

  // console.log(describeProduct(product))

  // output: "The product is a chair. It costs $24.99.""

// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
// Pseudocode:
  // input: object
  // output: a number
  // method: create function called totalWithTax, that multipllies price * (.07)

  const totalWithTax = (object) => {
    return (object.price + (object.price * .07)).toFixed(2)
  }
  console.log(totalWithTax(product))
  // output: 26.74




  const lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread", "peanut butter", "banana"]
  }

//   Write the code that accesses the ingredients property.
// Write the code that access the third ingredient of the lunch object.
// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
