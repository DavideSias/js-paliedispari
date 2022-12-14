
/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

let eleChoice = prompt('Scegli se pari o dispari').toLowerCase();

while ((eleChoice != 'pari') && (eleChoice != 'dispari')){
    eleChoice = prompt('Valore non valido! Scegli se pari o dispari').toLowerCase();
}

let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
while((userNumber <= 0) || (userNumber > 5)){
    userNumber = parseInt(prompt('Numero non valido! Inserisci un numero da 1 a 5'));
}

const botNumber = getRandomNum(1, 5);
const sum = isEven(userNumber + botNumber);

console.log('Hai scelto ' + eleChoice);
console.log('Il tuo numero è: ' + userNumber);
console.log('Il numero del computer è: ' + botNumber);
console.log('Il totale è: ' + (userNumber + botNumber));

let evenOrOdd;
if(sum){
    evenOrOdd = 'pari'
} else {
    evenOrOdd = 'dispari'
}

if ((eleChoice === 'pari' && sum === true) || (eleChoice === 'dispari' && sum === false)) {
    console.log('Il numero è: ' + evenOrOdd);
    console.log('Hai vinto!')
} else{
    console.log('Il numero è: ' + evenOrOdd);
    console.log('Hai perso! Ritenta sarai più fortunato')
} 

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function isEven(result){
    if(result % 2){
        return false;
    } else {
        return true;
    }
}

