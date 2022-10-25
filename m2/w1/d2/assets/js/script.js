//var globali
var btn = document.getElementById('calcola');
var importo;
var tetto;

//funzione start con click
btn.addEventListener('click', function () {
    //reset listato
    document.getElementById('listato').innerHTML = '';
    //rendo articoli come array
    const articoli = [];
    //prendi i valori dai campi input
    importo = document.getElementById('budget').value;
    tetto = document.getElementById('tetto').value;
    //finchè importo maggiore 200, genera spese
    while(importo >= 200){
        calcolo = Math.floor((Math.random() * tetto) + 1);
        //inserimento valori nell'array
        articoli.push(calcolo);
        //definisco il totale
        totale = importo - calcolo;
        //stampa listato
        document.getElementById('listato').innerHTML += ` <li> Ammontare della spesa: ${calcolo} &#8364 <br> Nuovo budget aggiornato: ${totale} &#8364 </li>`;
        //riparti da nuovo saldo
        importo = totale;
    }
    //stampa lunghezza array
    var lunghezza = articoli.length;
    document.getElementById('articoli').innerHTML = ` Hai acquistato: ${lunghezza} articoli`;

    //alert 200 euro
    document.getElementById('fermati').innerHTML = `&#9940 Fermati, il tuo saldo è inferiore a 200 &#8364; Stai spendendo troppo! &#9940`

    //ripulisci campi input
    document.getElementById('budget').value = '';
    document.getElementById('tetto').value = '';
});





    

   






