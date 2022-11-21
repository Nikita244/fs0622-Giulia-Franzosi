/*class MotherAccount {
    nome:string;
    cognome: string;
    conto:number;
    interesse:number;
    constructor(_nome:string, _cognome:string, _conto:number, _interesse:number){
        this.nome=_nome;
        this.cognome=_cognome;
        this.conto=0;
        this.interesse=10;
    }
    //VERSAMENTO
    oneDeposit():number{
        let versamento=20000;
        this.conto = versamento;
        let versamentoInteresse:number = this.conto /100 * this.interesse;
        this.conto = this.conto - versamentoInteresse;
        return this.conto
    }

    //PRELIEVO
    oneWithDraw():number{
        let prelievo:number = 1000;
        let prelievoInteresse:number = prelievo / 100 * this.interesse;
        prelievo = prelievo + prelievoInteresse;
        let saldoFinale = this.oneDeposit() - prelievo;
        return saldoFinale
    }
}

var madre = new MotherAccount('Giorgia','Rossi', 0, 0);
//MADRE
console.log(`Il saldo del conto di ${madre.nome} è ${madre.oneDeposit()}€`);
console.log(`${madre.nome} ha effettuato un prelievo e ora il suo saldo è ${madre.oneWithDraw()}€`);


//-------------------------------------------------------------------

class AccountFiglio{
    nome:string;
    cognome: string;
    conto:number;
    constructor(_nome:string, _cognome:string, _conto:number){
        this.nome=_nome;
        this.cognome=_cognome;
        this.conto=0;
    }
    //VERSAMENTO
    oneDeposit():number{
        let deposito:number = 20000;
        this.conto = deposito;
        return this.conto
    }
    //PRELIEVO
        oneWithDraw():number{
            let prelievo:number = Math.floor(Math.random() * (1000 - 1)+1);
            let saldoFinale:number = this.oneDeposit() - prelievo;
            return saldoFinale
        }
}   
//FIGLIO
var figlio = new AccountFiglio('Marco','Bianchi', 0);
console.log(`Il saldo del conto di ${figlio.nome} è ${figlio.oneDeposit()}€`);
console.log(`${figlio.nome} ha effettuato un prelievo e ora il suo saldo è ${figlio.oneWithDraw()}€`);*/

//-----------------------------------------------------------------------------------------------


//Classe principale mother che si estende a figlio
class Mother {
    nome: string;
    conto: number;
    interesse: number;

    constructor(_nome: string, _conto: number, _interesse: number) {
        this.nome = _nome;
        this.conto = _conto;
        this.interesse = _interesse;
    }
    // VERSAMENTO
    oneDeposit(): number {
        let versamento = 20000;
        this.conto = versamento - this.addInterest(versamento);
        return this.conto;
    }
    // PRELIEVO
    oneWithDraw(): number {
        let prelievo: number = 1000;
        prelievo = prelievo + this.addInterest(prelievo);
        let saldoFinale = this.oneDeposit() - prelievo;
        return saldoFinale
    }

    addInterest(valore: number) {
        return valore = valore / 100 * this.interesse;
    }
}

var madre = new Mother('Anna', 0, 10);

// MADRE
console.log(`Il conto di ${madre.nome} è di ${madre.oneDeposit()}€`);
console.log(`${madre.nome} ha effettutato un prelievo ora il suo conto è ${madre.oneWithDraw()}€`);


class Figlio extends Mother {
    constructor(_nome: string, _conto: number, _interesse: number) {
        super(_nome, _conto, _interesse)
    }

}
var figlio = new Figlio('Giulia', 0, 0);
// FIGLIO
console.log(`Il conto di ${figlio.nome} è di ${figlio.oneDeposit()}€`);
console.log(`${figlio.nome} ha effettutato un prelievo ora il suo conto è ${figlio.oneWithDraw()}€`);