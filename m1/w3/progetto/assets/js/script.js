//STAMPA VALORE DIGITATO
 function f(dato){ 
   document.getElementById('calcoli').value += dato;
}

//ESEGUI CALCOLI
function operazione() { 
document.getElementById('calcoli').value = eval(document.getElementById('calcoli').value); 
}

//SVUOTA DISPLAY CON C
function cancella() { 
 document.getElementById('calcoli').value = ''; 
}

//CALCOLO RADICE QUADRATA
function calcoloRadice() {
  document.getElementById('calcoli').value = Math.sqrt(document.getElementById('calcoli').value);
}

//TASTO PLUSMINUS
function plusminus(){
  document.getElementById('calcoli').value = (document.getElementById('calcoli').value)*-1;
}
