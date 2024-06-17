
//Stel een gestructureerde mededeling (GSM) samen aan de hand van 3 parameters (jaar, klant en bestelNr)
//en voeg het controlegetal toe => cc = jjjkkkkbbb % 97
//het formaat is ***jjj/kkkk/bbbcc*** 
class GSM {
    private _controle: number;
    private _gsm: string;
    //static properties (zijn gelijk voor alle instanties van deze klasse)
    public static decoratie = "*";
    public static scheiding = "/";

    constructor(public readonly jaar: number, public readonly klantNr: number = 0, public readonly bestelNr: number = 0) 
    {
    }

    public get Controle(): number {
        this.Stelsamen();
        return this._controle;
    }

    public toString() {
        this.Stelsamen();
        return this._gsm;
    }

    //hier gebeurt alle 'magic'
    private Stelsamen() {
        let sJaar: string;

        if (this.jaar <= 99)
            //jaar => bv. 17
            sJaar = PadLeft(this.jaar.toString(), 3);
        else
            //jaar => bv. 2017, neem de laatste 2 tekens met de "substring" functie
            sJaar = PadLeft(this.jaar.toString().substr(2), 3);

        let sKlant = PadLeft(this.klantNr.toString(), 4);
        let sBestel = PadLeft(this.bestelNr.toString(), 3);

        let totaal = sJaar + sKlant + sBestel;
        this._controle = Number(totaal) % 97;
        let sControle = PadLeft(this._controle.toString(), 2);

        //finaal de strings samenvoegen mbv. 'backticks'
        let deco = `${GSM.decoratie}${GSM.decoratie}${GSM.decoratie}`
        this._gsm = `${deco}${sJaar}${GSM.scheiding}${sKlant}${GSM.scheiding}${sBestel}${sControle}${deco}`
    }
}

//Vul de tekst links aan met het padTeken tot de opgegeven lengte bereikt is.
//bv. tekst: 17, lengte = 3 => maakt van '17' -> '017'
function PadLeft(tekst: string, lengte: number, padTeken: string = "0") {
    while (tekst.length < lengte) {
        tekst = padTeken + tekst;
    }
    return tekst;
}

//test code....
let mijnGSM = new GSM(2017, 123, 1);
console.log("GSM:" + mijnGSM.toString());
console.log("enkel controle: " + mijnGSM.Controle);

//vanaf nu ander decoratie teken gebruiken
//static member wil zeggen => geldig voor alle instanties (ook reeds bestaande objecten)
GSM.decoratie = "+";
//even testen..
let mijnGSM2 = new GSM(17, 124, 2);
console.log("GSM2:" + mijnGSM2.toString());

//De static 'decoratie' is ook voor deze vorige instantie uiteraard geldig...
console.log("GSM:" + mijnGSM.toString());
