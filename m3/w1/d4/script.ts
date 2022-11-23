var array = [];

var table = document.getElementById('table')!;

window.addEventListener('DOMContentLoaded', printCapi);

class Inventario implements capo{
    id: number;
    codprod: number;
    collezione:string;
    capo:string;
    modello:number;
    quantita:number;
    colore:string;
    prezzoivaesclusa:number;
    prezzoivainclusa:number;
    disponibile:string;
    saldo:number;

    constructor(_id: number, _codprod: number, _collezione:string, _capo:string, _modello:number, _quantita:number, _colore:string, _prezzoivaesclusa:number, _prezzoivainclusa:number, _disponibile:string,_saldo:number){
        this.id = _id;
        this.codprod = _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivaesclusa= _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
    getsaldocapo():number{
        return this.prezzoivainclusa * this.saldo / 100;
    }

    getacquistocapo():number{
        return this.prezzoivainclusa - this.getsaldocapo();
    }

    creariga():HTMLElement{
        let tr = document.createElement('tr')

        let tdId = document.createElement('td')
        tdId.innerText=this.id.toString() /*converte number in string perche innertext prevede solo testo*/

        let tdCodprod = document.createElement('td')
        tdCodprod.innerText=this.codprod.toString()

        let tdColl = document.createElement('td')
        tdColl.innerText=this.collezione

        let tdCapo = document.createElement('td')
        tdCapo.innerText=this.capo

        let tdMod = document.createElement('td')
        tdMod.innerText=this.modello.toString()

        let tdQt = document.createElement('td')
        tdQt.innerText=this.quantita.toString()

        let tdColor = document.createElement('td')
        tdColor.innerText=this.colore

        let tdIe = document.createElement('td')
        tdIe.innerText=this.prezzoivaesclusa.toString()

        let tdIi = document.createElement('td')
        tdIi.innerText=this.prezzoivainclusa.toString()

        let tdDisp = document.createElement('td')
        tdDisp.innerText=this.disponibile

        let tdSaldo = document.createElement('td')
        tdSaldo.innerText=this.saldo.toString()

        tr.append(tdId, tdCodprod, tdColl, tdCapo, tdMod, tdQt, tdColor, tdIe, tdIi, tdDisp, tdSaldo)
        return tr
    }
}


function printCapi(){
    fetch('http://localhost:3000/capi').then((response) => { 
        return response.json();
    }).then((capi:capo[]) => {
        array = capi;
        console.log(capi);
        
        capi.map(function (element){
            let abbigliamento = new Inventario (element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);

            let tr = abbigliamento.creariga();
            table.append(tr);
            console.log(abbigliamento);
            console.log(abbigliamento.getacquistocapo());
        })
    })
}





/*interface serve a creare la tipologia di dato che arriva come risposta al then della fetch*/
interface capo{
    id: number,
    codprod:number,
    collezione:string,
    capo:string,
    modello:number,
    quantita:number,
    colore:string,
    prezzoivaesclusa:number,
    prezzoivainclusa:number,
    disponibile:string,
    saldo:number
}