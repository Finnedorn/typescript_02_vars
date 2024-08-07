"use strict";
// interfacce 
// e l-oggetto che ne crea una nuova istanza
const formaGeometrica = {
    altezza: 15,
    lunghezza: 30
};
console.log(formaGeometrica);
// la const che crea una nuova interfaccia di Special si presentera' quindi cosi':
const formaSpeciale = {
    altezza: 15,
    lunghezza: 30,
    nome: 'rettangolo speciale'
};
console.log(formaSpeciale);
//--------------------------------------------------------------------------------------
//implements
// le interfacce dichiarate possono essere implementate anche su classi
// forzandole ad aderire alle direttive imposte dall'interfaccia
// creiamo una classe che implementi le direttive settate
// da SpecialRettangolo che a sua volta estende Rettangolo
class ClasseSpecialRettangolo {
    constructor(altezza, lunghezza, nome) {
        this.altezza = altezza;
        this.lunghezza = lunghezza;
        this.nome = nome;
        this.altezza = altezza;
        this.lunghezza = lunghezza;
        this.nome = nome;
    }
}
const formaSpeciale1 = new ClasseSpecialRettangolo(15, 30, 'rettangolo speciale');
console.log(formaSpeciale);
// e una classe figlia di una classe padre che implementa un interfaccia e' costretta a seguire
// le direttive dell'intefaccia del padre?
// solo per le proprieta' che estende dal padre e se anch'essa decide di implementare l'interfaccia
// nel settare le sue proprieta'
// esempio:
// la classe di seguito e' figlia della classe precedente 
// e sceglie di implementare anch'essa l'interfaccia del padre
class ClasseFigliaSpecialRettangolo extends ClasseSpecialRettangolo {
    constructor(altezza, lunghezza, nome, colore) {
        super(altezza, lunghezza, nome);
        this.colore = colore;
        this.colore = colore;
    }
    // Aggiungiamo un nuovo metodo specifico della classe figlia
    descrizione() {
        return `Rettangolo di colore ${this.colore} chiamato ${this.nome} con altezza ${this.altezza} e lunghezza ${this.lunghezza}.`;
    }
}
const rettangoloFiglio = new ClasseFigliaSpecialRettangolo(15, 30, 'rettangolo speciale', 'rosso');
console.log(rettangoloFiglio);
console.log(rettangoloFiglio.descrizione());
