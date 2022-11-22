"use strict";
class Lavoratore {
    constructor(_codRedd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef) {
        this.codRedd = _codRedd;
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
        this.tasseInps = _tasseInps;
        this.tasseIrpef = _tasseIrpef;
    }
    getUtileTasse() {
        let utileTasse = (this.redditoAnnuoLordo * this.codRedd / 100);
        return utileTasse;
    }
    ;
    getTasseInps() {
        let tasseDellInps = (this.getUtileTasse() * this.tasseInps / 100);
        return tasseDellInps;
    }
    ;
    getTasseIrpef() {
        let tasseDellIrpef = (this.getUtileTasse() * this.tasseIrpef / 100);
        return tasseDellIrpef;
    }
    ;
    getRedditoAnnuoNetto() {
        let redditoAnnuoNetto = (this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef()));
        return redditoAnnuoNetto;
    }
    ;
}
class Lavoratori extends Lavoratore {
    constructor(_codRedd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef) {
        super(_codRedd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef);
    }
}
var professionista = new Lavoratori(78, 27000, 25, 5);
var artigiano = new Lavoratori(67, 70000, 0.1, 14);
var commerciante = new Lavoratori(40, 100000, 0.2, 12);
var evasore = new Lavoratori(0, 100000, 0, 0);
// PROFESSIONISTA
console.log(`Professionista: utile tasse:${professionista.getUtileTasse()}€`);
console.log(`Tasse Inps professionista:${professionista.getTasseInps()}€`);
console.log(`Tasse Irpef professionista:${professionista.getTasseIrpef()}€`);
console.log(`Reddito annuo netto:${professionista.getRedditoAnnuoNetto()}€`);
console.log('--------------------------------------------');
//ARTIGIANO
console.log(`Artigiano: utile tasse:${artigiano.getUtileTasse()}€`);
console.log(`Tasse Inps artigiano:${artigiano.getTasseInps()}€`);
console.log(`Tasse Irpef artigiano:${artigiano.getTasseIrpef()}€`);
console.log(`Reddito annuo netto:${artigiano.getRedditoAnnuoNetto()}€`);
console.log('--------------------------------------------');
//COMMERCIANTE
console.log(`Commerciante: utile tasse:${commerciante.getUtileTasse()}€`);
console.log(`Tasse Inps commerciante:${commerciante.getTasseInps()}€`);
console.log(`Tasse Irpef commerciante:${commerciante.getTasseIrpef()}€`);
console.log(`Reddito annuo netto:${commerciante.getRedditoAnnuoNetto()}€`);
console.log('--------------------------------------------');
