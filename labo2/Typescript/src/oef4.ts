//oef4: oop
export class GestructureerdeMededeling {
  #jaar;
  #klant;
  #bestelNr;

  public constructor(jaar, klant, bestelNr) {
    this.#jaar = jaar;
    this.#klant = klant;
    this.#bestelNr = bestelNr;
  }

  public getJaar() {
    return this.#jaar;
  }
  public getKlant() {
    return this.#klant;
  }
  public getBestelNr() {
    return this.#bestelNr;
  }
}
