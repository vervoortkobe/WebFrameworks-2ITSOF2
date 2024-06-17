//ik geef voor deze module aan welke klasse(n) en/of functies ik wens te exporteren
//maw. beschikbaar te maken voor andere modules
//en ik geef (optioneel) een alias aan de naam, onder deze alias zal de klasse dus beschikbaar worden gesteld.
export {GSM as GestructureerdeMededeling, VM as VrijeMededeling}

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

//Klasse 'Vrije Mededeling' bevat weinig functionaliteit. 
//De meegeleverde tekst wordt enkel ingekort tot de eerste 30 karakters indien nodig
class VM {
    constructor(private tekst: string){}
    
    get Tekst(){
        return this.tekst.substr(0,30);
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
