var nome;
var cognome;
var addBtn;
var elencoHTML;
var errore;
var erroreElenco;
var checkpoint;
var elenco = [];

window.addEventListener('DOMContentLoaded', init);

function init() {
	nome = document.getElementById('nome');
	cognome = document.getElementById('cognome');
	addBtn = document.getElementById('scrivi');
	elencoHTML = document.getElementById('elenco');
	errore = document.getElementById('errore');
	erroreElenco = document.getElementById('erroreElenco');
	checkpoint = true || false;
	printData();
	eventHandler();
}

function eventHandler() {
	addBtn.addEventListener('click', function () {
		if (checkpoint == true){
			controlla();
		}
	});
}

async function printData() {
	let response = await fetch('http://localhost:3500/elenco')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			elenco = data;
			if (elenco.length > 0) {
				errore.innerHTML = '';
				elencoHTML.innerHTML = '';
				elenco.map(function (element) {
					elencoHTML.innerHTML += `<li style= list-style:none;><button type="button" class="btn btn-danger m-1" onClick="elimina(${element.id})"><i class="bi bi-trash3"></i></button><button type="button" class="btn btn-success m-1" onClick="modifica(${element.id} , '${element.nome}' , '${element.cognome}')"><i class="bi bi-pencil"></i></button>${element.nome} ${element.cognome}</li>`;
				});
			} else {
				erroreElenco.innerHTML = 'Nessun elemento presente in elenco';
			}
		});
}

function controlla() {
	if (nome.value != '' && cognome.value != '') {
		var data = {
			nome: nome.value,
			cognome: cognome.value,
		};
		addData(data);
	} else {
		errore.innerHTML = 'Compilare correttamente i campi!';
		return;
	}
}

async function addData(data) {
	let response = await fetch('http://localhost:3500/elenco', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(data),
	});
	clearForm();
}

function clearForm() {
	nome.value = '';
	cognome.value = '';
}

//FUNZIONE ELIMINA
async function elimina(id) {
	//alert di eliminazione
	let text = "Sei sicuro? L'azione è irreversibile!";
	if (confirm(text) == true) {
		//metodo delete
		let response = await fetch('http://localhost:3500/elenco/' + id, {
			method: 'DELETE',
		})/*.then(res => res.json());*/
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//METODO PUT


function modifica(id, newNome, newCognome) {
	nome.value = newNome;
	cognome.value = newCognome;
	checkpoint = false;
	addBtn.addEventListener('click', async function(){
		var data = {
			nome: nome.value,
			cognome: cognome.value
		};
		let response = await fetch('http://localhost:3500/elenco/' + id, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(data)
	});
	})
}
