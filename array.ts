// Arrays:
let bestNumbers: number[] = [7, 77, 4];
let bestLunches: string[] = ["chicken soup", "non-chicken soup"];
let bestBreakfasts: string[] = [
  "fasting",
  "oatmeal",
  "tamago kake gohan",
  "any kind of soup",
];
let bestBooleans: boolean[] = [true, false];

// Multidimensional Arrays:
let bestMealPlan: string[][] = [
  bestLunches,
  bestBreakfasts,
  ["baked potato", "mashed potato"],
];
let bestBooleansTwice: boolean[][] = [bestBooleans, bestBooleans];
let numbersMulti: number[][][] = [
  [[1], [2, 3]],
  [[7], bestNumbers],
];

//Spread Syntax
function performDanceMove(
  moveName: string,
  moveReps: number,
  hasFlair: boolean
): void {
  console.log(`I do the ${moveName} ${moveReps} times !`);
  if (hasFlair) {
    console.log("I do it with flair!");
  }
}

let danceMoves: [string, number, boolean][] = [
  ["chicken beak", 4, false],
  ["wing flap", 4, false],
  ["tail feather shake", 4, false],
  ["clap", 4, false],
  ["chicken beak", 4, true],
  ["wing flap", 4, true],
  ["tail feather shake", 4, true],
  ["clap", 4, true],
];

danceMoves.forEach((el) => {
  performDanceMove(el[0], el[1], el[2]);
});

for (let i = 0; i < danceMoves.length; i++) {
  performDanceMove(...danceMoves[i]);
}
