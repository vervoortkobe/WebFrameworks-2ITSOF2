//oef1: static types
let var1 = 4;
let var2 = "test";
let var3 = [];
let getal1 = 1;
let getal2 = 2;
let getal3 = getal1 + getal2;
let arrayVanGetallen = [1, 2, 3, 4, 5];
var kleurenEnum;
(function (kleurenEnum) {
    kleurenEnum[kleurenEnum["Groen"] = 0] = "Groen";
    kleurenEnum[kleurenEnum["Rood"] = 1] = "Rood";
    kleurenEnum[kleurenEnum["Geel"] = 2] = "Geel";
    kleurenEnum[kleurenEnum["Oranje"] = 3] = "Oranje";
    kleurenEnum[kleurenEnum["Blauw"] = 4] = "Blauw";
})(kleurenEnum || (kleurenEnum = {}));
let enumArray = [
    kleurenEnum.Groen,
    kleurenEnum.Rood,
    kleurenEnum.Geel,
    kleurenEnum.Oranje,
    kleurenEnum.Blauw,
];
let arrayNumBools = [1, true, 2, false];
let tuple = [1, "test", false];
let getalNullable = null;
