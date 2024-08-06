"use strict";
// casting
// il casting e' una modalita' override 
// Il casting in TypeScript è un meccanismo che permette di informare il compilatore
// che un valore di un certo tipo dovrebbe essere trattato come se fosse di un altro tipo. 
// Questo può essere utile in situazioni in cui si è certi del tipo di un valore,
// ma il compilatore non riesce a determinarlo automaticamente.
let value = 'ciao';
// console.log(value.length); 
console.log(value.length);
console.log(value.length);
// let input = document.querySelector('input');
// let inputValue = input.value; Errore: o e' null o un html input element
let input = document.querySelector('input');
let inputValue = input.value;
console.log(input.value);
let paragrafo = document.querySelector('p');
paragrafo.textContent = 'Buongiorno ciao';
