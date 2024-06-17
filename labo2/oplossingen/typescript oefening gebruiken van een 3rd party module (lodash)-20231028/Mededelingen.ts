//via import geef ik aan dat ik wens gebruik te maken van de functie "padStart", die zich in de "lodash" module bevindt.
//lodash is ingesteld als dependency (package.json), vergeet echter niet om deze lokaal te installeren via 'npm install'
import {padStart} from "lodash"

export {GSM as GestructureerdeMededeling}

//Stel een gestructureerde mededeling (GSM) samen aan de hand van 3 parameters (jaar, klant en bestelNr)
//en voeg het controlegetal toe => cc = jjjkkkkbbb % 97
//het formaat is ***jjj/kkkk/bbbcc*** 
export class GSM {
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
            sJaar = padStart(this.jaar.toString(), 3, "0");
        else
            //jaar => bv. 2017, neem de laatste 2 tekens met de "substring" functie
            sJaar = padStart(this.jaar.toString().substr(2), 3, "0");

        let sKlant = padStart(this.klantNr.toString(), 4,"0");
        let sBestel = padStart(this.bestelNr.toString(), 3,"0");

        let totaal = sJaar + sKlant + sBestel;
        this._controle = Number(totaal) % 97;
        let sControle = padStart(this._controle.toString(), 2, "0");

        //finaal de strings samenvoegen mbv. 'backticks'
        let deco = `${GSM.decoratie}${GSM.decoratie}${GSM.decoratie}`
        this._gsm = `${deco}${sJaar}${GSM.scheiding}${sKlant}${GSM.scheiding}${sBestel}${sControle}${deco}`
    }
}

//Vul de tekst links aan met het padTeken tot de opgegeven lengte bereikt is.
//bv. tekst: 17, lengte = 3 => maakt van '17' -> '017'
// function PadLeft(tekst: string, lengte: number, padTeken: string = "0") {
//     while (tekst.length < lengte) {
//         tekst = padTeken + tekst;
//     }
//     return tekst;
// }
