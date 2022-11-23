var array = [];
var table = document.getElementById('table');
window.addEventListener('DOMContentLoaded', printCapi);
var Inventario = /** @class */ (function () {
    function Inventario(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
        this.id = _id;
        this.codprod = _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
    Inventario.prototype.getsaldocapo = function () {
        return this.prezzoivainclusa * this.saldo / 100;
    };
    Inventario.prototype.getacquistocapo = function () {
        return this.prezzoivainclusa - this.getsaldocapo();
    };
    Inventario.prototype.creariga = function () {
        var tr = document.createElement('tr');
        var tdId = document.createElement('td');
        tdId.innerText = this.id.toString(); /*converte number in string perche innertext prevede solo testo*/
        var tdCodprod = document.createElement('td');
        tdCodprod.innerText = this.codprod.toString();
        var tdColl = document.createElement('td');
        tdColl.innerText = this.collezione;
        var tdCapo = document.createElement('td');
        tdCapo.innerText = this.capo;
        var tdMod = document.createElement('td');
        tdMod.innerText = this.modello.toString();
        var tdQt = document.createElement('td');
        tdQt.innerText = this.quantita.toString();
        var tdColor = document.createElement('td');
        tdColor.innerText = this.colore;
        var tdIe = document.createElement('td');
        tdIe.innerText = this.prezzoivaesclusa.toString();
        var tdIi = document.createElement('td');
        tdIi.innerText = this.prezzoivainclusa.toString();
        var tdDisp = document.createElement('td');
        tdDisp.innerText = this.disponibile;
        var tdSaldo = document.createElement('td');
        tdSaldo.innerText = this.saldo.toString();
        tr.append(tdId, tdCodprod, tdColl, tdCapo, tdMod, tdQt, tdColor, tdIe, tdIi, tdDisp, tdSaldo);
        return tr;
    };
    return Inventario;
}());
function printCapi() {
    fetch('http://localhost:3000/capi').then(function (response) {
        return response.json();
    }).then(function (capi) {
        array = capi;
        console.log(capi);
        capi.map(function (element) {
            var abbigliamento = new Inventario(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
            var tr = abbigliamento.creariga();
            table.append(tr);
            console.log(abbigliamento);
            console.log(abbigliamento.getacquistocapo());
        });
    });
}
printCapi();
