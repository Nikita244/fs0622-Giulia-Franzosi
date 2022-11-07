var arrayUtente = [];
var btnAdd = document.getElementById('add');
var listato = document.getElementById('listato');

function Angrafica(_nome, _cognome, _eta) {
    this.nome = _nome;
    this.cognome = _cognome;
    this.eta = _eta;
    //primo metodo
    this.calcolaEta = function(){
        let data = new Date (this.eta)
        let anno = data.getFullYear()
        return (anno - data);
    }
    //secondo metodo 
    this.aggiungiRiga = function(){
        return `<tr><td>${this.nome} ${this.cognome}</td><td>${this.calcolaEta()}</td></tr>`
    }
}

btnAdd.addEventListener('click', function (e) {
    e.preventDefault();
    let newNome = document.getElementById('nome').value;
    let newCognome = document.getElementById('cognome').value;
    let newEta = document.getElementById('data').value;

    if (newNome && newCognome && newEta) {
        let newAnagrafica = new Angrafica(newNome, newCognome, newEta);
        arrayUtente.push(newAnagrafica);
        stampaLista();
    } else {
        document.getElementById('errore').innerHTML = 'Attenzione! Riempire tutti i campi!';
        return;
    }
});

function stampaLista() {
    document.getElementById('errore').innerHTML = '';
    listato.innerHTML = '';
    arrayUtente.forEach((item) => {
        //listato.innerHTML += `<tr><td>${item.nome} ${item.cognome}</td><td>${item.eta}</td></tr>`
        listato.innerHTML += item.aggiungiRiga();
    });
    document.getElementById('nome').value = '';
    document.getElementById('cognome').value = '';
    document.getElementById('data').value = '';
}