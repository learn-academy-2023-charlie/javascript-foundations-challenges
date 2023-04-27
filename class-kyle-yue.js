// Coffee marker: copy the given Coffee class into a text editor



// Write the code that outputs the 1 cream and 2 sugars coffee profile
class Coffee {
  constructor(type, cream, sugar) {
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile() {
    return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
  }

  creams() {
    if (this.cream > 1) {
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars() {
    if (this.sugar > 1) {
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}


// Write the code that makes a black coffee object

// const black = new Coffee ("black", "no", "no")

// OUTPUT: A black coffee coffee with no cream, no sugar

// Write the code that outputs the black coffee's profile

// console.log(black.coffeeProfile())

// OUTPUT: A black coffee with no cream cream, no sugar sugar

// Write the code that makes a coffee object with 1 cream and 2 sugars

// const  simple = new Coffee ("Simple", "1", "and 2")

// Write the code that outputs the 1 cream and 2 sugars coffee profile

// console.log(simple.coffeeProfile())