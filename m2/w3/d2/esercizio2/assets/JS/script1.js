const users = [
    {id:1, nome: 'Luca', cognome: 'Rossi', classe: 'A'},
    {id:2, nome: 'Luigi', cognome: 'Verdi', classe: 'A'},
    {id:3, nome: 'Mario', cognome: 'Bianchi', classe: 'A'},
    {id:4, nome: 'Piero', cognome: 'Neri', classe: 'A'},
    {id:5, nome: 'Paolo', cognome: 'Rossi', classe: 'A'},
    {id:6, nome: 'Sergio', cognome: 'Verdi', classe: 'A'},
    {id:7, nome: 'Gianni', cognome: 'Bianchi', classe: 'A'},
    {id:8, nome: 'Davide', cognome: 'Neri', classe: 'A'},
];



let lista = document.getElementById('listato');

stampaLista()
function stampaLista() {
    users.forEach((item) => {
        lista.innerHTML += `<tr><td>${item.id} <td>${item.nome} </td> <td> ${item.cognome}</td> <td>${item.classe}</td></tr>`
    });
}

