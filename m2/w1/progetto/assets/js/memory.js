let arrayAnimali = ['assets/img/diavolo.png', 'assets/img/fantasma.png', 'assets/img/frank.png', 'assets/img/gatto.png','assets/img/mummia.png','assets/img/occhio.png','assets/img/pantera.png','assets/img/pipistrello.png','assets/img/teschio.png','assets/img/vampiro.png','assets/img/zucca.png','assets/img/zuccaverde.png','assets/img/diavolo.png', 'assets/img/fantasma.png', 'assets/img/frank.png', 'assets/img/gatto.png','assets/img/mummia.png','assets/img/occhio.png','assets/img/pantera.png','assets/img/pipistrello.png','assets/img/teschio.png','assets/img/vampiro.png','assets/img/zucca.png','assets/img/zuccaverde.png'];

//libreria per icone
//https://html-css-js.com/html/character-codes/


let arrayComparison = [];

document.body.onload = startGame();

var iconsFind = document.getElementsByClassName("find");
// mi serviranno alcune variabili 1. interval 2. una agganciata alla classe find 
// 3. una agganciata al'id modal 4. una agganciata alla classe timer


//una funzione che serve a mescolare in modo random gli elementi dell'array che viene passato 
// (l'array contiene le icone degli animali)
function shuffle(a) {
    var currentIndex = a.length;
    var temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = a[currentIndex];
        a[currentIndex] = a[randomIndex];
        a[randomIndex] = temporaryValue;
    }
    return a;
}
// una funzione che rimuove la classe active e chiama la funzione startGame()

// la funzione startGame che pulisce il timer, dichiara un array vuoto, mescola casualmente l'array degli animali
// (var arrayShuffle = shuffle(arrayAnimali);), aggancia il contenitore con id griglia, 
// pulisce tutti gli elementi che eventualmente contiene
// poi fa ciclo per creare i 24 div child -> aggiunge la class e l'elemento dell'array in base all'indice progressivo
// chiama la funzione timer e associa a tutti gli elementi (div) di classe icon l'evento click e le due funzioni definit sotto

function startGame(){
    var arrayShuffle = shuffle(arrayAnimali);
    clearInterval(interval);
    var griglia = document.getElementById('griglia');
    while (griglia.hasChildNodes()) {
        griglia.removeChild(griglia.firstChild);
    }
    for(var i = 0; i < 24; i++){
        var retroCarta = document.createElement('div');
        var simboloCarta = document.createElement('div');
        simboloCarta.src = arrayAnimali[i];
        simboloCarta.className = 'icon';
        document.getElementById('griglia').appendChild(retroCarta).appendChild(simboloCarta);
            simboloCarta.innerHTML = `<img src="${arrayShuffle[i]}">`;
    }
    avviaTimer();

    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];
    for (var i = 0; i < icons.length; i++){
        icons[i].addEventListener("click", displayIcon);
        icons[i].addEventListener("click", attivaModale);
      }
}//fine funzione start game


function displayIcon() {
    
    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];

    /*
    var icons = document.getElementsByClassName("icon");
    //var icons = [...icon];
    ?? un operatore che serve per passare un array come argomento:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax 
    https://www.tutorialspoint.com/es6/es6_operators.htm (cerca spread nella pagina)
    */

    //mette/toglie la classe show
    this.classList.toggle("show");
    //aggiunge l'oggetto su cui ha cliccato all'array del confronto
    arrayComparison.push(this);

    var len = arrayComparison.length;
    //se nel confronto ci sono due elementi
    if (len === 2) {
        //se sono uguali aggiunge la classe find
        if (arrayComparison[0].innerHTML === arrayComparison[1].innerHTML) {
            arrayComparison[0].classList.add("find", "disabled");
            arrayComparison[1].classList.add("find", "disabled");
            arrayComparison = [];
        } else {
            //altrimenti (ha sbagliato) aggiunge solo la classe disabled
            icons.forEach(function(item) {
                item.classList.add('disabled');
            });
            // con il timeout rimuove  la classe show per nasconderli
            setTimeout(function() {
                arrayComparison[0].classList.remove("show");
                arrayComparison[1].classList.remove("show");
                icons.forEach(function(item) {
                    item.classList.remove('disabled');
                    for (var i = 0; i < iconsFind.length; i++) {
                        iconsFind[i].classList.add("disabled");
                    }
                });
                arrayComparison = [];
            }, 700);
        }
    }
}

//una funzione che viene mostrata alla fine quando sono tutte le risposte esatte

// una funzione che apre e nasconde la modale alla fine e riavvia il gioco

modal = document.getElementById('modal');

var timer = document.querySelector('.timer');

function attivaModale(){
    if (iconsFind.length == 24){
        clearInterval(interval);
        modal.className = "active";
        document.getElementById('tempoTrascorso').innerHTML = timer.innerHTML;
    }
    
}
function playAgain(){
    modal.classList.remove("active");
    startGame();
}//fine funzione apri e chiudi modale e riavvia il gioco*/


var interval;
function avviaTimer(){
    var s = 0, m = 0, h = 0;
    interval = setInterval(function(){
        timer.innerHTML = 'Tempo: ' + m + " min " + s + " sec";
        s++;
        if(s == 60){
            m++;
            s = 0;
        }
        if(m == 60){
            h++;
            m = 0;
        }
    },1000);
} // fine funzione che calcola il tempo e aggiorna il contenitore sotto