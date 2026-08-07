import {createInterface} from "node:readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    });
 // console.log(rl);

function askForCommand() {
    rl.question(
    "\n[l] Left | [r] Right | [i] Inspect | [d] Directory | [q] Quit\n> ",
    (answer) => {
        const command = answer.trim().toLowerCase();

      if (command === "q") {
        console.log("\nThank you for visiting the JS Terminal Zoo.");
        rl.close();
        return;
      }

      handleCommand(command);
      displayZoo();
      askForCommand();
    },
  );
}

function handleCommand(command) {
    if(command === "l") {
        console.log(visitor.moveLeft());
    } else if(command === "r") {
        console.log(visitor.moveRight(zooPath.length -1));
    } else if(command === "i") {
        inspectLocation();
    }else if(command === "d") {
        showZooDirectory();
    } else {
        console.log("Please enter l, r, i, d, or q.");
    }
}

class Animal{
      constructor(name, species, symbol){
        this.name = name;
        this.species = species;
        this.symbol = symbol;
    }
}

class Lion extends Animal{
  constructor(name){
      super(name,"lion","🦁")
  }
}

class Elephant extends Animal{
  constructor(name){
      super(name,"elephant","🐘")
  }
}

class Bird extends Animal{
  constructor(name){
      super(name,"bird","🕊️")
  }
}

class Bear extends Animal{
  constructor(name){
      super(name,"bear","🐻")
  }
}

class Visitor{
    constructor(name, symbol) {
        this.name = name;
        this.symbol = symbol;
        this.position = 0;
    }
    // ย้ายตำแหน่งไปทางซ้าย
  moveLeft(){
    if (this.position ===0){
      return `${this.name} is already at the entrance.`;
    }
    this.position--;
    return `${this.name} walk to the left.`;
  }   
  // ย้ายตำแหน่งไปทางขวา
  moveRight(){
    if (this.position ===zooPath.length -1){
      return `${this.position} is already at the end of the zoo.`;
    }
    this.position++;
    return `${this.name} walk to the right.`;
  } 
}
const visitor = new Visitor("Paifon", "👧");

const animals = [
    new Lion("Simbd"),
    new Elephant("Simbd"),
    new Bird("Simbd"),
    new Bear("Simbd"),
];

const zooPath = [
  {
    symbol: "🚪",
    name: "Entrance",
    description:
      "The main entrance to the zoo. The morning visitors are arriving.",
  },
  {
    symbol: animals[0].symbol,
    name: "Lion enclosure",
    animal: animals[0],
  },
  {
    symbol: "🌳",
    name: "Garden",
    description: "A quiet garden with large trees and shaded benches.",
  },
  {
    symbol: animals[1].symbol,
    name: "Elephant enclosure",
    animal: animals[1],
  },
  {
    symbol: animals[2].symbol,
    name: "Aviary",
    animal: animals[2],
  },
  {
    symbol: animals[3].symbol,
    name: "Bear habitat",
    animal: animals[3],
  },
  {
    symbol: "🍽️",
    name: "Food court",
    description: "The food court smells like popcorn and fresh fruit.",
  },
];

const zooName = "JS Terminal Zoo";

function showZooDirectory() {
  console.log("\nZoo Directory");
  console.table(
    animals.map((animal) => ({
      name: animal.name,
      species: animal.species,
      symbol: animal.symbol,
    })),
  );
}

function displayZoo() {
  const bannerRow = [`===${zooName} ===`]; // ชื่อแถบสวนสัตว์
  const placesRow = zooPath.map((location) => location.symbol);
  const pathwayRow = zooPath.map(() => "⬜");

pathwayRow[visitor.position] = "👧";

console.log("");
console.log(bannerRow.join(""));
console.log(placesRow.join(" — "));
console.log(pathwayRow.join(" — "));
}

function inspectLocation() {
// 1 ดึงสถานที่
const location = zooPath[visitor.position];

// 2 print ชื่อสถานที่
console.log(`\nYou are at: ${location.name}`);

// 3 เช็ค description
if(location.animal){
  console.log(`${location.animal.name} is a ${location.animal.species}`);
}

if (location.animal) {
   console.log(location.animal.describe());
   console.log(location.animal.makeSound());
  } else {
   console.log(location.description);
  }
}

function prepareAnimalFood() {
  setTimeout(()=> console.log("The animal feed is ready"), 2000); }

console.log(`Welcome to the ${zooName} Explorer.`);
showZooDirectory();
displayZoo();
inspectLocation();
prepareAnimalFood();
askForCommand();

