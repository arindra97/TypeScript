// Enum
enum Direction {
  North,
  South,
  East,
  West,
}

let whichWayToArtiticOcean: Direction;

whichWayToArtiticOcean = Direction.North; // No Error
// whichWayToArtiticOcean = North; -- Cannot find name 'North'
whichWayToArtiticOcean = 2; // No Error || Equal to East

// change the starting number, writing something like
enum Arah {
  Utara = 7,
  Selatan,
  Timur,
  Barat,
}

let kemanaArahJakarta: Arah;
kemanaArahJakarta = 8; //Selatan

// also specify all numbers separately, if needed

enum Buah {
  Apel = 4,
  Manggis = 1,
  Mangga = 6,
  Jeruk = 3,
}

let mauBuahApa: Buah;
mauBuahApa = 3; // Jeruk
mauBuahApa = 1; // Manggis

let petOnSale = "chinchilla";
let ordersArray = [
  ["rat", 2],
  ["chinchilla", 1],
  ["hamster", 2],
  ["chinchilla", 50],
];

// Write your code below:
enum Pet {
  Hamster,
  Rat,
  Chinchilla,
  Tarantula,
}

let petOnSaleTS: Pet = Pet.Chinchilla;

let ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50],
  [Pet.Tarantula, 3],
];

// let’s see what happens when someone tries to order a pet that the shop does not carry.
// ordersArrayTS.push([Pet.Jerboa, 3]);

// String Enums
let petOnSaleS = "chinchilla";
let ordersArrayS = [
  ["rat", 2],
  ["chinchilla", 1],
  ["hamster", 2],
  ["chinchilla", 50],
];

// Write your code below:
enum Pet1 {
  Hamster = "HAMSTER",
  Rat = "RAT",
  Chinchilla = "CHINCHILLA",
  Tarantula = "TARANTULA",
}

let petOnSaleTSS: Pet1 = Pet1.Chinchilla;
let ordersArrayTSS: [Pet1, number][] = [
  [Pet1.Rat, 2],
  [Pet1.Chinchilla, 1],
  [Pet1.Hamster, 2],
  [Pet1.Chinchilla, 50],
];

// string enums are very particular about the form their values are written in. Even though you wrote Hamster = 'HAMSTER' in the enum Pet statement, you cannot use 'HAMSTER' as the enum value. You must use Pet.Hamster instead.
// ordersArrayTSS.push(['HAMSTER', 1]);

// Object Types
function sayHappyBirthdayWithObject(personObject: {
  name: string;
  age: number;
  giftWish: string;
  success: boolean;
}) {
  let output = "";
  output += "Happy Birthday " + personObject.name + "! ";
  output += "You are now " + personObject.age + " years old! ";
  output +=
    "Your birthday wish was to receive " +
    personObject.giftWish +
    ". And guess what? You will ";
  if (!personObject.success) {
    output += "not ";
  }
  output += "receive it! \n";
  console.log(output);
}

let birthdayBabies: {
  name: string;
  age: number;
  giftWish: string;
  success: boolean;
}[] = [
  { name: "Liam", age: 0, giftWish: "karate skills", success: false },
  { name: "Olivia", age: 0, giftWish: "a bright future", success: true },
  { name: "Ava", age: 0, giftWish: "$0.25", success: true },
];

birthdayBabies.forEach(sayHappyBirthdayWithObject);

// Type Aliases
// Add your type alias below:
type Coord = [number, number, string, number, number, string];

let codecademyCoordinates: Coord = [40, 43.2, "N", 73, 59.8, "W"];
let bermudaTCoordinates: Coord = [25, 0, "N", 71, 0, "W"];

// Function Types
// Math Operations
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function wrongAdd(a, b) {
  return a + b + "";
}

// Add your function type below:
mathTutor(multiply);
// mathTutor(wrongAdd)
// ==> error because OperatorFunction return type number not string

type OperatorFunction = (arg0: number, arg1: number) => number;

// Math Tutor Function That Accepts a Callback
function mathTutor(operationCallback: OperatorFunction) {
  console.log("Let's learn how to", operationCallback.name, "!");
  let value25 = operationCallback(2, 5);
  console.log(
    "When we",
    operationCallback.name,
    "2 and 5, we get",
    value25,
    "."
  );
  console.log(
    "When we",
    operationCallback.name,
    value25,
    "and 7, we get",
    operationCallback(value25, 7),
    "."
  );
  console.log("Now fill out this worksheet.");
}

// Generic Types
type Human = { name: string; job: string };
type Dog = { name: string; tailWagSpeed: number };

type Family<T> = {
  parents: [T, T];
  mate: T;
  children: T[];
};
//Do not change the code above this line.

//Provide type annotations for the variables below:
let theFamily: Family<number> = {
  parents: [3, 4],
  mate: 9,
  children: [5, 30, 121],
};

let someFamily: Family<boolean> = {
  parents: [true, true],
  mate: false,
  children: [false, false, true, true],
};

let aFamily: Family<Human> = {
  parents: [
    { name: "Mom", job: "software engineer" },
    { name: "Dad", job: "coding engineer" },
  ],
  mate: { name: "Matesky", job: "engineering coder" },
  children: [{ name: "Babesky", job: "none" }],
};

let anotherFamily: Family<Dog> = {
  parents: [
    { name: "Momo", tailWagSpeed: 3 },
    { name: "Dado", tailWagSpeed: 100 },
  ],
  mate: { name: "Cheems", tailWagSpeed: 7 },
  children: [
    { name: "Puppin", tailWagSpeed: 0.001 },
    { name: "Puppenaut", tailWagSpeed: 0.0001 },
    { name: "Puppenator", tailWagSpeed: 0.01 },
  ],
};

// Generic Function
function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}

let stringArray: string[];
let numberArray: number[];
let personArray: { name: string; age: number }[];
let coordinateArray: [number, number][];

// Write your code below:
stringArray = getFilledArray<string>("hi", 6);
numberArray = getFilledArray<number>(9, 6);
personArray = getFilledArray<{ name: string; age: number }>(
  { name: "J. Dean", age: 24 },
  6
);
coordinateArray = getFilledArray<[number, number]>([3, 4], 6);

console.log(
  stringArray,
  "\n",
  numberArray,
  "\n",
  personArray,
  "\n",
  coordinateArray
);
