const stringa = 'Sto imparando JavaScript';

//MAIUSCOLO
var maiuscolo = stringa.toUpperCase();
document.getElementById('maiuscola').innerHTML = maiuscolo;

//MINUSCOLO
var minuscolo = stringa.toLowerCase();
document.getElementById('minuscola').innerHTML = minuscolo;

//SPELLING
var spelling = stringa.split("");
document.getElementById('strArray').innerHTML = spelling;

//ESTRAZIONE CARATTERI
var pos1 = stringa.substring(3, 2)
var pos2 = stringa.substring(2, 1)
var pos3 = stringa.substring(15, 14)
var pos4 = stringa.substring(19, 18)
var escCaratteri = pos1 + pos2 + pos3 + pos4;
document.getElementById('estraiCaratteri').innerHTML = escCaratteri;

//CONCATENAZIONE
var nuoveLettere = stringa.concat(' JS');
document.getElementById('concatena').innerHTML = nuoveLettere;

//ESTRAZIONE STRINGA
var escStringa = stringa.slice(5, 9);
document.getElementById('estraiStringa').innerHTML = escStringa;

//ARRAY 4 PERSONE
var arrayNomi = ['Giovanni', 'Carla', 'Piero', 'Mirtilla'];
document.getElementById('array').innerHTML += arrayNomi;

//LUNGHEZZA ARRAY
var totale = arrayNomi.length;
document.getElementById('lunghezza').innerHTML = totale;

//SINGOLO ELEMENTO
document.getElementById('elemento').innerHTML = arrayNomi[2];

//ULTIMO ELEMENTO
document.getElementById('ultimo').innerHTML = arrayNomi[3];

//MODIFICATO
var cambioNome = arrayNomi.splice(2, 1, 'Massimo');
document.getElementById('modificato').innerHTML = arrayNomi;

//ARRAY ARGOMENTO DI FUNZIONE
var arrayNascita = [2001, 1990, 1987, 2018, 2010];

const calcolaAnni = function (compleanno) {
    return 2022 - compleanno;
}

const eta0 = calcolaAnni(arrayNascita[0]);
const eta1 = calcolaAnni(arrayNascita[1]);
const eta2 = calcolaAnni(arrayNascita[2]);
const eta3 = calcolaAnni(arrayNascita[3]);
const eta4 = calcolaAnni(arrayNascita[4]);

var arrayEta = [eta0, eta1, eta2, eta3, eta4];

document.getElementById('eta1').innerHTML += eta0 + ' anni';
document.getElementById('eta2').innerHTML += eta1 + ' anni';
document.getElementById('eta3').innerHTML += eta2 + ' anni';
document.getElementById('eta4').innerHTML += eta3 + ' anni';
document.getElementById('eta5').innerHTML += eta4 + ' anni';
document.getElementById('arrayEta').innerHTML = arrayEta;


//ARRAY ANIMALI
var arrayAnimali = ['coniglio', 'cane', 'gatto', 'criceto'];
document.getElementById('intero').innerHTML = arrayAnimali;

var aggiunta = arrayAnimali.push('leone');
document.getElementById('aggiunto').innerHTML = arrayAnimali;

var rimosso = arrayAnimali.pop('leone');
document.getElementById('estratto').innerHTML = arrayAnimali;

var controllo1 = arrayAnimali.includes('criceto');
document.getElementById('verifica1').innerHTML = controllo1;

var controllo2 = arrayAnimali.includes('leone');
document.getElementById('verifica2').innerHTML = controllo2;
