// Coffee marker: copy the given Coffee class into a text editor
// class Coffee {
//     constructor(type, cream, sugar) {
//       this.type = type.toLowerCase()
//       this.cream = cream
//       this.sugar = sugar
//     }
  
//     coffeeProfile() {
//       return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
//     }
  
//     creams() {
//       if (this.cream > 1) {
//         return `${this.cream} creams`
//       } else {
//         return `${this.cream} cream`
//       }
//     }
  
//     sugars() {
//       if (this.sugar > 1) {
//         return `${this.sugar} sugars`
//       } else {
//         return `${this.sugar} sugar`
//       }
//     }
//   }


// Write the code that makes a black coffee object
// const blackCoffee = new Coffee("black", "none", "none")
// Write the code that outputs the black coffee's profile
// console.log(blackCoffee.coffeeProfile());
// Write the code that makes a coffee object with 1 cream and 2 sugars
// const sweetCoffee = new Coffee("sweet", 1, 2)
// Write the code that outputs the 1 cream and 2 sugars coffee profile
// console.log(sweetCoffee.coffeeProfile());


// Latte Maker: create a class for Latte

class latteMaker {
    constructor(flavor, milk, shot) {
      this.flavor = flavor //.toLowerCase()
      this.milk = milk
      this.shot = shot
    }
  
    latteProfile() {
      return `A ${this.flavor} latte with ${this.milk()}, ${this.shot()}.`
    }
    // flavor() {
    //     if (this.flavor > 1) {
    //       return `${this.flavors} flavors`
    //     } else {
    //       return `${this.flavor} flavor`
    //     }
    //   }
    
    milk() {
      if (this.milk > 1) {
        return `${this.milks} milks`
      } else {
        return `${this.milk} milk`
      }
    }
  
    shot() {
      if (this.shot > 1) {
        return `${this.shots} shots`
      } else {
        return `${this.shot} shot`
      }
    }
  }

// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
console.log(latteMaker.latteProfile);
// Write the code that makes a regular, single shot latte
const regularLatte = new latteMaker ("regular",1,1)
// Log the regular, single shot latte's profile
console.log(regularLatte.latteProfile());
// Write the code that makes a double shot, hazelnut latte with almond milk.
// Log the double shot, hazelnut latte with almond milk's profile.
// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects
