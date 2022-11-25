"use strict";
class Utente {
    constructor(_credito, _counterChiamate) {
        this.credito = _credito;
        this.counterChiamate = _counterChiamate;
    }
    ricarica(x) {
        this.credito = this.credito + x;
    }
    chiamata(y) {
        this.credito = this.credito - y * 0.2;
        this.counterChiamate++;
    }
    numero404() {
        return this.credito;
    }
    getNumeroChiamate() {
        return this.counterChiamate;
    }
    azzeraChiamate() {
        this.counterChiamate = 0;
    }
}
//----------------------------------------------UTENTE 1 CHE STAMPA IN HTML
let giulia = new Utente(25, 0);
let giuliaChiamate = [];
giulia.chiamata(8);
giuliaChiamate.push(' Lavoro <br> <i class="bi bi-clock mini"> 08:00 minuti</i>');
giulia.chiamata(3);
giuliaChiamate.push(' Medico <br> <i class="bi bi-clock mini"> 03:00 minuti</i>');
giulia.chiamata(15);
giuliaChiamate.push(' Mamma <br> <i class="bi bi-clock mini"> 15:00 minuti</i>');
giulia.chiamata(4);
giuliaChiamate.push(' Veterinario <br> <i class="bi bi-clock mini"> 04:00 minuti</i>');
giulia.chiamata(1);
giuliaChiamate.push(' Supermercato <br> <i class="bi bi-clock mini"> 01:00 minuti</i>');
giulia.chiamata(5);
giuliaChiamate.push(' +39 356 879 6667 <br> <i class="bi bi-clock mini"> 05:00 minuti</i>');
giulia.chiamata(3);
giuliaChiamate.push(' +39 010 45 87 965 <br> <i class="bi bi-clock mini"> 03:00 minuti</i>');
giulia.chiamata(2);
giuliaChiamate.push(' +39 079 32 25 741 <br> <i class="bi bi-clock mini"> 01:00 minuti</i>');
giulia.chiamata(7);
giuliaChiamate.push(' +39 324 351 4511 <br> <i class="bi bi-clock mini"> 07:00 minuti</i>');
giuliaChiamate.map((element) => {
    document.getElementById('lista').innerHTML += `<li class="list-group-item"><i class="bi bi-person-circle"></i>${element}</li>`;
});
console.log('Utente Giulia');
console.log('Credito residuo:' + " " + (Math.floor(giulia.numero404())));
document.getElementById("stampaCredito").innerHTML = ('il suo credito residuo è di:' + " " + (Math.floor(giulia.numero404())) + '€');
console.log('Numero chiamate:' + " " + giulia.getNumeroChiamate());
document.getElementById("stampaNchiamate").innerHTML = ('Oggi ha effettuato:' + '<br>' + giulia.getNumeroChiamate() + " " + 'chiamate.');
giulia.azzeraChiamate();
console.log('Chiamate azzerate:' + " " + giulia.getNumeroChiamate());
console.log('---------------');
//----------------------------------------------UTENTE 2
let mario = new Utente(0, 0);
mario.ricarica(25.0);
mario.chiamata(1);
mario.ricarica(25.0);
mario.chiamata(1);
mario.ricarica(25.0);
mario.chiamata(1);
console.log('Utente Mario');
console.log('Credito residuo:' + " " + (Math.floor(mario.numero404())));
console.log('Numero chiamate:' + " " + mario.getNumeroChiamate());
mario.azzeraChiamate();
console.log('Chiamate azzerate:' + " " + mario.getNumeroChiamate());
console.log('---------------');
//----------------------------------------------UTENTE 3
let anna = new Utente(0, 0);
anna.ricarica(35.0);
anna.chiamata(5);
anna.ricarica(10.0);
anna.chiamata(5);
console.log('Utente Anna');
console.log('Credito residuo:' + " " + (Math.floor(anna.numero404())));
console.log('Numero chiamate:' + " " + anna.getNumeroChiamate());
anna.azzeraChiamate();
console.log('Chiamate azzerate:' + " " + anna.getNumeroChiamate());
console.log('---------------');
//----------------------------------------------STAMPA ORA
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
const d = new Date();
let h = addZero(d.getHours());
let m = addZero(d.getMinutes());
let time = h + ":" + m;
document.getElementById("hour").innerHTML = time;
