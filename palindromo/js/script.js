/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
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

