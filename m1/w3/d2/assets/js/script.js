//CONCATENA 1
var nome = 'Aldo';
let ruolo = 'cliente';
const numero = 3.14;

document.getElementById('concatena').innerHTML = nome + ', ' + ruolo + ', ' + numero;

//CONCATENA 2
var dati = `${nome}, ${ruolo}, ${numero}`;
document.getElementById('concatena2').innerHTML = dati;

//TERZO ESERCIZIO parte 1
var nome = 'Mario';
document.getElementById('var').innerHTML = nome;
{
    let nome = 'Carla'
    document.getElementById('let').innerHTML = nome;
}
document.getElementById('final').innerHTML = nome;

//TERZO ESERCIZIO parte 2
{
    let nome = 'Mario'
    document.getElementById('let2').innerHTML = nome;
}
{
    let nome = 'Carla';
    document.getElementById('let3').innerHTML = nome;
    document.getElementById('final2').innerHTML = nome;
}

//OPERAZIONI MATEMATICHE
var iniziale = 15;

document.getElementById('iniziale').innerHTML = 'Valore iniziale:' + iniziale;

//addizione e incremento
var addizione =  iniziale + iniziale;
document.getElementById('valore1').innerHTML = `Addizione e incremento: ${addizione}, ${++addizione}`;

//sottrazione e decremento
var sottrazione = iniziale - 10;
document.getElementById('valore2').innerHTML = `Sottrazione e decremento: ${sottrazione}, ${--sottrazione}`;

//moltiplicazione
var moltiplicazione = iniziale * 3;
document.getElementById('valore3').innerHTML = `Moltiplicazione: ${moltiplicazione}`

//divisione
var divisione = iniziale / 3;
document.getElementById('valore4').innerHTML = `Divisione: ${divisione}`

//concatenazione
document.getElementById('valore5').innerHTML = `Concatenazione: ${iniziale} è un numero`;