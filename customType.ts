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
