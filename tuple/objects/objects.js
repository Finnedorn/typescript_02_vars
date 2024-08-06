"use strict";
// oggetti 
// come per le tuple, gli oggetti in ts sono caratterizzati 
// da strutture fisse in cui ogni valore accetta un determinato dato
const pet = {
    nome: 'jack',
    colore: 'marrone',
    anni: 10
};
// come per le funzioni e' possibile impostare dati di tipo opzionale 
// in questo esempio il value anni e' facoltativo
const pet1 = {
    nome: 'jack',
    colore: 'marrone',
};
// ovviamente cio' comporta anche il fatto che io possa assegnarlo in un secondo momento
pet1.anni = 5;
