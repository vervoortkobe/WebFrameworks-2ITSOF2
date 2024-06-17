import { GestructureerdeMededeling } from "./Mededelingen";


//test code....
let mijnGSM = new GestructureerdeMededeling(2017, 123, 1);
console.log("GSM:" + mijnGSM.toString());
console.log("enkel controle: " + mijnGSM.Controle);

GestructureerdeMededeling.decoratie = "+";
//even testen..
let mijnGSM2 = new GestructureerdeMededeling(17, 124, 2);
console.log("GSM2:" + mijnGSM2.toString());

//De static 'decoratie' is ook voor deze vorige instantie uiteraard geldig...
console.log("GSM:" + mijnGSM.toString());
