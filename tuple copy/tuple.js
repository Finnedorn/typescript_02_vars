"use strict";
// tuple 
// le tuple sono array con strutture fisse e poco flessibili
// esse sono vincolanti sia per il numero di elementi che per tipo di dati che accettano
// in questo caso avrei un array di 3 elementi di cui il primo e' di un tipo numero e cosi' via...
let lista;
lista = [8, true, 'ehi'];
//lista = ['gatto', true, 'ehi']; errore
//lista = [ true, 'ehi']; errore
console.log(lista);
let lista2;
// lista2.push('cane'); 
// lista2.push(12);
// errore: non e' possibile pushare un elemento in tupla prima di averla definita nel contenuto
// in quanto una tupla difatto e' composta da un numero preciso di elementi
// l'unico modo di pushare un elemento(che rispetti i canoni stabiliti) in tupla
// e' andando prima a definirne il contenuto
lista2 = [3, true, 6];
lista2.push(16);
