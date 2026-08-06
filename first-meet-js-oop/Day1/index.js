// the Class templa/blueprint/prototype (Encapsulation)

class Animal {
    constructor(name, species){
        this.name = name;
        this.species = species;
        this.hunger = 50;
    }

    makeSound(){
        console.log(`${this.name} make a sound ...`);
    }

    eat() {
        this.hunger = this.hunger - 10;
        console.log(
            `${this.name} the ${this.species} ate. Hunger level is now ${this.hunger}.`,    
        );
    }
}

// Object instance is created
const leo = new Animal("Leo", "Lion")

console.log(leo);
console.log(leo.hunger);
leo.eat();
console.log(leo.hunger);

// specialized classes (Inheritance)
class Mammal extends Animal{
    constructor(name, species, furColor) {
        super(name, species);
        this.furColor = furColor;
    }

    groom() {
        console.log(`${this.name} is brus their ${this.furColor} fur.`);
    }
}

class Birds extends Animal{
    constructor(name, species, wingspam) {
        super(name, species);
        this.wingspam = wingspam;
}

//this is an example of Polymorphism; overide the parent's method
 makeSound(){
        console.log(`${this.name} chirps: Tweet Tweet!`);
    }
}

const zazu = new Birds("Zazu", "Hornbill", "2 feet");
const baloo = new Mammal("Baloo", "Bear", "brown");

console.log (baloo);
console.log(baloo.hunger);

baloo.eat();
console.log(baloo.hunger);

baloo.groom();
zazu.makeSound();

