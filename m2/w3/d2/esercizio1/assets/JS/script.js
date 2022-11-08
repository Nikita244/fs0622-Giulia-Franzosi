//ESERCIZIO CONFRONTO ETA'
class Persona {
    constructor(_nome, _eta) {
        this.nome = _nome;
        this.eta = _eta;
    }
    controlloEta(x) {
        if (this.eta > x.eta) {
            document.write(this.nome + " è più vecchio di " + x.nome + "<br>");
        }else {
            document.write(x.nome + " è più vecchio di " + this.nome + "<br>");
        }
    }
}

var p1 = new Persona('Mario', 21);
var p2 = new Persona('Simone', 18);
var p3 = new Persona('Giulia', 30);
p1.controlloEta(p2);
p1.controlloEta(p3);
p2.controlloEta(p3);

