//the Class template/blueprint/prototype (Encapsulation)

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
        console.log(`${this.name} the ${this.species} ate. Hunger level is now ${this.hunger}`);
    } 
}

// Objects instance
const leo = new Animal("Leo", "Lion");

console.log (leo);

console.log(leo.hunger);
leo.eat();
console.log(leo.hunger);

//specialized class (Inheritance)
 
//Mammal class inherits from Animal class เวลาใส่ constructor กับ super() ต้องใส่ parameter ของคลาสแม่ด้วย ซึ่งในที่นี้คือ name และ species จาก Animal class
class Mammal extends Animal {
    constructor(name, species, furColor) {
        super(name, species);
        this.furColor = furColor;
    }

    groom(){
        console.log(`${this.name} is brushing their ${this.furColor} fur`);
    }
}

const baloo = new Mammal("Baloo", "Bear", "brown");

console.log (baloo);
console.log(baloo.hunger);
baloo.eat();
console.log(baloo.hunger);
baloo.groom()


//Bird class inherits from Animal class
class Bird extends Animal {
    constructor(name, species, wingspan) {
        super(name, species);
        this.wingspan = wingspan;
    }

    // this is an example of Polymorphism; overide the parent's method
    makeSound(){
        console.log(`${this.name} chirps: Tweet! Tweet!`);
    }
}

const zazu = new Bird("Zazu", "Hornbill", "2 feet");

console.log (zazu);
console.log(zazu.hunger);
zazu.eat();
console.log(zazu.hunger);
zazu.makeSound();


//Fish class inherits from Animal class
class Fish extends Animal {
    constructor(name, species, waterType) {
        super(name, species);
        this.waterType = waterType;
    }

    makeSound() {
        console.log(`${this.name} makes bubble sounds: Blub... blub...`);
    }

    swim() {
        console.log(`${this.name} is swimming in ${this.waterType} water`);
    }
}

const nemo = new Fish("JJ", "Clownfish", "saltwater");

console.log(nemo);
console.log(nemo.hunger);
nemo.eat();
console.log(nemo.hunger);
nemo.makeSound();
nemo.swim();


// Amphibian class inherits from Animal class
class Amphibian extends Animal {
    constructor(name, species, skinType) {
        super(name, species);
        this.skinType = skinType;
    }

    makeSound() {
        console.log(`${this.name} croaks: Ribbit... Ribbit...`);
    }

    jump() {
        console.log(`${this.name} is jumping with ${this.skinType} skin`);
    }
}

const kero = new Amphibian("Koko", "Frog", "slimy");

console.log(kero);
kero.makeSound();
kero.jump();


