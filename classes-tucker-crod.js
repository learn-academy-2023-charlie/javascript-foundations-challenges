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
    
// class Coffee {
//   constructor(type, cream, sugar) {
//     this.type = type.toLowerCase()
//     this.cream = cream
//     this.sugar = sugar
//   }

//   coffeeProfile() {
//     return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
//   }

//   creams() {
//     if (this.cream > 1) {
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }

//   sugars() {
//     if (this.sugar > 1) {
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//   }
// }
// const blackCoffee = new Coffee("black", 1, 2)
//    output: Coffee { type: 'black', cream: 2, sugar: 2 }

// console.log(blackCoffee.coffeeProfile())
// console.log(blackCoffee)



// Latte Maker: create a class for Latte

// class Latte {
//   constructor(flavor, milktype, shots){
//     this.flavor = flavor.toLowerCase()
//     this.milktype = milktype
//     this.shots = shots
//     } 
//   latteProfile(){
//     return `A ${this.flavor} latte with ${this.milktype} milk, ${this.shot()}.`
//   }
//   shot(){
//     if(this.shots > 1){
//       return `${this.shots} shots`
//     } else{
//       return `${this.shots} shot`
//     }
//   }
// }

// const latteType = new Latte("hazelnut","almond" , 2)
// console.log(latteType.latteProfile())


// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte
  // Output: const latteType = new Latte("regular","no" , 1)

// Log the regular, single shot latte's profile
  //console.log(latteType.latteProfile())

// Write the code that makes a double shot, hazelnut latte with almond milk.
  // Output: const latteType = new Latte("hazelnut","almond" , 2)

// Log the double shot, hazelnut latte with almond milk's profile.
  // Output: A hazelnut latte with almond milk, 2 shots.


// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects

class Cylinder {
    constructor(radius, height){
        this.radius = radius
        this.height = height
    }

    getData(){
        return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
    }
}

const volume = new Cylinder (10, 20)

const cylinder1 = new Cylinder(3, 6);
const cylinder2 = new Cylinder(6, 5);
const cylinder3 = new Cylinder(4, 8);
console.log(volume.getData())

console.log(cylinder1.getData(),cylinder2.getData(), cylinder3.getData()) 
    //output: 169.6460 565.4867 402.1239
