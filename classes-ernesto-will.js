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
// Coffee marker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
//   pseudocode:
        // input: string
        // output: string
        // method: create object using new keyword and assign a string via dot notation

 const drink = new Coffee("Black", 0, 0)
  console.log(drink) 
// output: Coffee { type: 'black', cream: 0, sugar: 0 }

// Write the code that outputs the black coffee's profile

console.log(drink.coffeeProfile())
// outout: A black coffee with 0 cream, 0 sugar

// Write the code that makes a coffee object with 1 cream and 2 sugars

const lightDrink = new Coffee("Black", 1, 2)
console.log(lightDrink) 
// output: Coffee { type: 'black', cream: 1, sugar: 2 }

// Write the code that outputs the 1 cream and 2 sugars coffee profile
console.log(lightDrink.coffeeProfile())
// output: A black coffee with 1 cream, 2 sugars