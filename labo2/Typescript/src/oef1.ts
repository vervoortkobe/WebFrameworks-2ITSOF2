//oef1: static types
let var1: number = 4;
let var2: string = "test";
let var3: string[] = [];

let getal1: number = 1;
let getal2: number = 2;
let getal3 = getal1 + getal2;

let arrayVanGetallen: number[] = [1, 2, 3, 4, 5];

enum kleurenEnum {
  Groen,
  Rood,
  Geel,
  Oranje,
  Blauw,
}
let enumArray: kleurenEnum[] = [
  kleurenEnum.Groen,
  kleurenEnum.Rood,
  kleurenEnum.Geel,
  kleurenEnum.Oranje,
  kleurenEnum.Blauw,
];

let arrayNumBools: (number | boolean)[] = [1, true, 2, false];

let tuple: [number, string, boolean] = [1, "test", false];

let getalNullable: number | null = null;
