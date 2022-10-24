var data = new Date();

const mesi = ['Gennaio' , 'Febbraio' , 'Marzo' , 'Aprile' , 'Maggio' , 'Giugno' , 'Luglio' , 'Agosto' , 'Settembre' , 'Ottobre' , 'Novembre' , 'Dicembre' ];

var giorno = data.getDate();
var mese = mesi[data.getMonth()];
var anno = data.getFullYear();

stampa();
function stampa(){
    document.getElementById('date').innerHTML += `${giorno} / ${mese} / ${anno}`;
    document.getElementById('full').innerHTML += data;
    document.getElementById('day').innerHTML += giorno;
    document.getElementById('month').innerHTML += mese;
    dataOggi()
}

function dataOggi(){
    let mese = [data.getMonth() + 1];
    document.getElementById('today').innerHTML += `${giorno}-${mese}-${anno}`;
}
/*---------------------------------------------------*/
