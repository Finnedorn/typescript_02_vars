"use strict";
// dati di tipo custom (alias)
// in ts e'possibile creare dei tipi di dati personalizzati
// una volta creato il tipo posso crearne effettivamente l'oggetto che ne rispetti i canoni 
let persona = {
    nome: 'daniele',
    lavoro: 'front',
    linguaggi: ['js', 'php']
};
console.log(persona);
// il risultato del console log sara':
// {nome: 'daniele', lavoro: 'front', linguaggi: Array(2)}
// essenso un obj, posso anche accedere ad un solo dato al suo interno:
console.log(persona.nome);
let utente;
utente = 21;
utente = 'dirigente';
console.log(utente);
const greet = (name) => `Hello, ${name}!`;
console.log(greet('Alice')); // Output: Hello, Alice!
