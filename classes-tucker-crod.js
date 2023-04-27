// Tucker and Crod Classes Challenges 4/27/23
// Coffee marker: copy the given Coffee class into a text editor

// Write the code that makes a black coffee object

// const blackCoffee = new Coffee("black", 2, 2)
   // output: Coffee { type: 'black', cream: 2, sugar: 2 }


// Write the code that outputs the black coffee's profile
//console.log(blackCoffee.coffeeProfile())
    // output: A black coffee with 2 creams, 2 sugars

// Write the code that makes a coffee object with 1 cream and 2 sugars
// const blackCoffee = new Coffee("black", 1, 2)
    //Coffee { type: 'black', cream: 1, sugar: 2 }
// Write the code that outputs the 1 cream and 2 sugars coffee profile
//console.log(blackCoffee.coffeeProfile())
    //output: A black coffee with 1 cream, 2 sugars
    
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
const blackCoffee = new Coffee("black", 1, 2)
   // output: Coffee { type: 'black', cream: 2, sugar: 2 }

console.log(blackCoffee.coffeeProfile())
console.log(blackCoffee)