"use strict";
// generics
// sono strutture che possono lavorare con diversi tipi di dati senza doverli specificare in anticipo
// questo perche' vado a rendere il dato di tipo generico
// questo da al codice riusabilita' e flessibilita'
// questa cosa si applica a diversi formati di dati gia visti in precedenza 
//applichiamolo ai tipi di dati gia' conosciuti
// funzioni
// in ogni tipo di dato i generics si dichiarano attraverso l'uso di <>
// sono per comune usanza dichiarati con lettere maiuscole
//in questo caso sto dichiarando unn tipo di dato generico di tipo T accettato solo da questa funzione
function printType(argomento) {
    // dichiarandolo in questo modo posso sfruttarlo sia nella dichiarazione del valore dell'argomento
    // sia utilizzarlo all'interno dello scope della funzione stessa
    console.log(typeof argomento);
    return argomento;
}
// flessibilita': avendo settato la funzione affinche accetti un dato geenrico contrassegnato da T
// questa potra' ricevere goni tipo di dato 
printType('ciao'); //risultato: string
printType(9); //risultato: number
printType({ x: 39, y: 50 }); //risultato: object
// classi
class Pari {
    constructor(elemento1, elemento2) {
        this.elemento1 = elemento1;
        this.elemento2 = elemento2;
    }
    getElemento1() {
        return this.elemento1;
    }
    getElemento2() {
        return this.elemento2;
    }
    getpari() {
        return this.elemento1 + " " + this.elemento2;
    }
}
//avendo settato la classe su proprieta' con dati generici assegnati con T ed U 
// sono capace di creare nuove istanze della classe con dati volubili  
let pari1 = new Pari('cane', 'gatto');
let pari2 = new Pari('cane', 4);
let pari3 = new Pari(false, 25);
function printType1(argomento) {
    console.log(typeof argomento);
    return argomento;
}
// dichiaro una variabile che segua le direttive di un interfaccia 
// (e che quindi mi restiruira' un oggetto)
// che accetta un tipo di dato generico di tipo array
// e che ha per valore la funzione printType1
let stampa = printType1;
// adesso quindi richiamo la funzione specificando il tipo di elementi
// che comporranno l'oggetto prodotto dall'interfaccia al cui interno avra' un array
// essendo il dato di tipo geenrico, posso andare a specificarne il tipo didato accettato per il contenuto
// al momento del richiamo della funzione stessa
stampa(['rosa', 'geranio']);
stampa([5, 6]);
// ed implementiamola su una classe
class MiaCoppia {
    constructor(primo, secondo) {
        this.primo = primo;
        this.secondo = secondo;
        this.primo = primo;
        this.secondo = secondo;
    }
}
// la nuova istanza della classe che implementa l'interfaccia con dati di tipo generico 
// dichiarera' il tipo di dato imposto dall'interfaccia e accettato come attributo dal costruttore
// al momento della creazione della nuova istanza stessa 
let obj = new MiaCoppia(10, 'coppia');
console.log(obj.primo); // stampera': 10
console.log(obj.secondo); // stampera': 'coppia'
