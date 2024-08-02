"use strict";
// funzioni
// come per le variabili anche le funzioni in ts dichiarano 
// il tipo di dato che vogliono ricevere per i parametri e per il valore di ritorno
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// corso ed ore saranno solo elementi di tipo number
function miaFunzione(corso, ore) {
    return `corso di ${corso}, ore totali: ${ore}`;
}
console.log(miaFunzione('typescript', 25));
// questa arrow function puo ritornarmi un valore di tipo any 
let freccia = (nome, cognome) => {
    return `alunnno: ${nome} ${cognome}`;
};
console.log(freccia('daniele', 'giuntoli'));
// questa cosa si applica anche nelle funzioni asyncrone 
const fetchData = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url);
    const data = yield response.json();
    return data;
});
fetchData("https://api.example.com/data")
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
const introduce = (person) => {
    return `My name is ${person.name} and I am ${person.age} years old.`;
};
let person = { name: "Charlie", age: 30 };
console.log(introduce(person)); // "My name is Charlie and I am 30 years old."
// -------------------------------------------------------------------------------------
// funzioni di tipo void
// questo tipo di funzioni sono peculiari di ts e non resituiscono
// un valore ma li limitano ad eseguire i processi al loro interno
function scriviCiao() {
    // return 'ciao';
    console.log('ciao');
}
scriviCiao();
function celebrateBirthday(person) {
    person.age += 1;
    console.log(`Happy Birthday, ${person.name}! You are now ${person.age} years old.`);
}
let alice = { name: "Alice", age: 30 };
celebrateBirthday(alice); // Output: Happy Birthday, Alice! You are now 31 years old.
// ----------------------------------------------------------------------------------------
// funzioni con parametri opzionali
// in ts e' possibile inserire un parametro ti tipo opzionale
// contrassegnandolo col simbolo '?' dopo il nome
function somma(valore, valore1, valore2) {
    // se ho il valore2 lo sommero' altrimenti aggiungero' 0 
    return valore + valore1 + (valore2 || 0);
}
console.log(somma(10, 4)); //mi dara' 14 in quanto ho inserito solo 2 attributi
console.log(somma(10, 4, 2)); //mi dara' 16 in quanto ho inserito il parametro valore2
function salutare(nome, saluto) {
    if (saluto) {
        return `${saluto}, ${nome}!`;
    }
    else {
        return `Ciao, ${nome}!`;
    }
}
let greeting1 = salutare("Alice"); // "Ciao, Alice!"
let greeting2 = salutare("Bob", "Buongiorno"); // "Buongiorno, Bob!"
console.log(greeting1);
console.log(greeting2);
// ---------------------------------------------------------------------------
// funzione con parametri di default
// e' inoltre possibile dare un valore di default ad un parametro
// ovvero un valore che questo assumera' nel caso in cui questo stesso non venga dichiarato
//valore2 ha un valore di default = 3 
function sottrazione(valore1, valore2 = 3) {
    return valore1 - valore2;
}
console.log(sottrazione(10));
// otterro' 7 
console.log(sottrazione(10, 2));
// otterro' 8
// ---------------------------------------------------------------------------
// funzioni con parametri named
// sono funzioni che accettano un vero e proprio oggetto come parametro della funzione 
// in questo caso sto passando un oggetto con due attributi di cui dichiaro il valore 
function operazione({ numero, valore }) {
    return numero * valore;
}
// console.log(operazione(10,2));
console.log(operazione({ numero: 10, valore: 6 }));
