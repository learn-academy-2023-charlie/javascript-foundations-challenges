// Coffee marker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
// Write the code that outputs the black coffee's profile
// Write the code that makes a coffee object with 1 cream and 2 sugars
// Write the code that outputs the 1 cream and 2 sugars coffee profile//

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
const blackCoffee = new Coffee ("black coffee", 0, 0)
const lightCoffee = new Coffee ("grande", 1, 2)
//blackCoffee.coffeeProfile()
lightCoffee.coffeeProfile

console.log(lightCoffee.coffeeProfile())


// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte
// Log the regular, single shot latte's profile
// Write the code that makes a double shot, hazelnut latte with almond milk.
// Log the double shot, hazelnut latte with almond milk's profile.
// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects


class Latte {
    constructor (flavor, milktype, shots) {
            this.flavor = flavor.toLowerCase()
            this.milktype = milktype
            this.shots = shots
          }    
          latteProfile() { 
            return `A ${this.flavor} flavored latte with ${this.milktype}, ${this.shots} shots`
          } 
        }
const newLatte = new Latte ("chocolate", "goat milk", 10)
newLatte.latteProfile
console.log(newLatte.latteProfile())