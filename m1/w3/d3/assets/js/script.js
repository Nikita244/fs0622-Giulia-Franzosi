//PRIMA CORRETTA
function succo(mele, arance) {
    var spesa = `Succo con ${mele} mele e ${arance} arance`;
    return spesa
}
document.getElementById('corretta').innerHTML = succo(4, 5);


//SECONDA SBAGLIATA
document.getElementById('sbagliata').innerHTML = succo(6);


//CALCOLARE LA PROPRIA ETA'
function calcoloEta(annoNascita) {
    var eta = 2022 - annoNascita;
    return eta
}
document.getElementById('eta').innerHTML += `${calcoloEta(1992)} anni`;


//ARROW PERSONA1
calcoloAnno = (eta1) => {
    var anna = 2022 - eta1
    return anna
}
document.getElementById('persona1').innerHTML = `L'anno di nascita di Anna è il ${calcoloAnno(30)}`;


//ARROW PERSONA2
calcoloAnno = (eta2) => {
    var maria = 2022 - eta2
    return maria
}
document.getElementById('persona2').innerHTML = `L'anno di nascita di Maria è il ${calcoloAnno(24)}`;


//TORTA con funzione oggetto di un'altra funzione
torta(9, 15)
function torta(fetteMela, fetteArancia) {
    function ricetta() {
        document.getElementById('torta').innerHTML = `Torta con ${fetteMela} fette di mela e ${fetteArancia} fette di arancia.`;
    }
    ricetta();
}


// FORM CALCOLO SPESA
var cibo;
var detersivi;
var abiti;
btn = document.getElementById('calcola');

btn.addEventListener('click', function () {
    cibo = Number(document.getElementById('cibo').value);
    detersivi = Number(document.getElementById('detersivi').value);
    abiti = Number(document.getElementById('abiti').value);
    totaleSpesa();
});

function totaleSpesa() {
    let somma = cibo + detersivi + abiti;
    document.getElementById('totale').innerHTML += somma;
    cancellaForm();
}

function cancellaForm() {
    document.getElementById('cibo').value = '';
    document.getElementById('detersivi').value = '';
    document.getElementById('abiti').value = '';
}

