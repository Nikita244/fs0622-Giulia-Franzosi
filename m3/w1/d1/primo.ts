/*console.log('Hello World')

let string: string;
string = 'Giulia';
console.log(string);


let ordine1:number=5;
let ordine2:number=2;

let nome: string = ordine1 > ordine2 ? 'Il primo numero di ordine è maggiore del secondo': 'Il secondo numero di ordine è maggiore del primo';
console.log(nome);*/

let giocatore1:number = Math.floor((Math.random() * 100) + 1);
console.log(`Il numero del giocatore 1 è: ${giocatore1}`)

let giocatore2:number = Math.floor((Math.random() * 100) + 1);
console.log(`Il numero del giocatore 1 è: ${giocatore2}`)

let estratto:number = Math.floor((Math.random() * 100) + 1);
console.log(`Il numero estratto è: ${estratto}`)

confronto();

function confronto (){
    if(giocatore1 == estratto){
        console.log(`Il giocatore 1 ha indovinato!`)
    } else if (giocatore2 == estratto){
        console.log(`Il giocatore 2 ha indovinato!`)
    } else if ((Math.abs(estratto - giocatore1)) < (Math.abs(estratto - giocatore2))){
        console.log(`Nessuno ha indovinato, ma il giocatore 1 si è avvicinato di più`);
    } else {
        console.log(`Nessuno ha indovinato, ma il giocatore 2 si è avvicinato di più`);
    }
}