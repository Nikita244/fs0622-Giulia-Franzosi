//interrogo il database e mi faccio restituire il suo contenuto, in questo caso solo il titolo dei posts

var elenco = [];
var lista = document.getElementById('lista');

window.addEventListener('DOMContentLoaded', printData); 

function printData(){
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => { 
        return response.json();
    }).then((data) => {
        elenco = data;
        elenco.map(function (element){
            lista.innerHTML += `<li>${element.title}</li>`
        });
    });
}
