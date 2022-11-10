var elenco = [];
var table = document.getElementById('table');

window.addEventListener('DOMContentLoaded', printData); 

function printData(){
    fetch('http://localhost:3000/lyrics').then((response) => { 
        return response.json();
    }).then((data) => {
        elenco = data;
        elenco.map(function (element){
            table.innerHTML += `<tr> <td>${element.id}</td> <td>${element.nome}</td> <td>${element.gruppo}</td> <td>${element.anno}</td> </tr>`
        });
    });
}


