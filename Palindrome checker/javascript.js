function convertPhrase(phrase){
    //coverts the string to lowercase and removes non-alphanumeric characters
    let word = phrase.toLowerCase().replace(/[^a-z0-9]/g, '');
    let palindromeWord = word.split('').reverse().join('');
    return word === palindromeWord;
}
// checks if a word or phrase is a palindrome
function isPalindrome(){
    let sentence = document.querySelector("#word");
    let enteredWord = document.querySelector("#enteredword");
    let result = document.querySelector("#answer");
    if (convertPhrase(sentence.value)){
        enteredWord.innerHTML = `ENTERED WORD: ${sentence.value}`;
        result.innerHTML = `The word "${sentence.value}" is a Palindrome`;
    }
    else{
        enteredWord.innerHTML = `PALINDROME WORD: ${sentence.value}`;
        result.innerHTML = `The word "${sentence.value}" is not a Palindrome`;
    }
}
let applyButton = document.querySelector("#click");
applyButton.addEventListener("click", isPalindrome);