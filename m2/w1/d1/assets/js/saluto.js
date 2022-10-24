var data = new Date()
var ora = data.getHours();
var min = data.getMinutes();
var sec = data.getSeconds();


timer()
function timer(){
    document.getElementById('time').innerHTML += `${ora} : ${min} : ${sec}`;
}


saluto()
function saluto(){
    if (ora > 6, ora < 13){
        document.getElementById('saluto').innerHTML = 'Buongiorno!';
    } else if (ora > 13, ora < 17){
        document.getElementById('saluto').innerHTML = 'Buon Pomeriggio!';
    }else if (ora > 17, ora < 23){
        document.getElementById('saluto').innerHTML = 'Buonasera!';
    } else{
        document.getElementById('saluto').innerHTML = 'Buona Notte!';
    }
}