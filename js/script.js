/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//PALINDROMA
const eleWord = prompt('inserisci una parola');
const result = isPalindrome(eleWord);

if(result){
    console.log('La parola inserita è palindroma');
} else{
    console.log('La parola inserita NON è palindroma');
}

function isPalindrome(word) {
    let arrWord = [];

    for(let i = 0; i < word.length; i++){
        item = word[i];
        arrWord.push(item);
    }

    console.log(arrWord);

    let reverseWord = [];

    for(let i = word.length - 1; i >= 0; i--){
        item = word[i];
        reverseWord.push(item);
    }

    console.log(reverseWord);

    if (arrWord.length != reverseWord.length){
        return false;
    } else {
        let result = false;
        for(let i = 0; i < arrWord.length; i++) {
            if(arrWord[i] != reverseWord[i]){
                return false;
            } else {
                result = true;
            }
        }
        return result;
    }
}

