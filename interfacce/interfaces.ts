// interfacce 

// come il tipo alias anche le interfacce sono dei tipi custom 
// ma si applicano specificatamente SOLO agli oggetti
// e si comportano un po come le classi
// inizialiaziamo un interfaccia:
interface Rettangolo {
    altezza: number,
    // anche qua posso lascia che alcune chiavi:valore siano opzionali
    lunghezza?: number
}
// e l-oggetto che ne crea una nuova istanza
const formaGeometrica: Rettangolo = {
    altezza: 15,
    lunghezza: 30
}

console.log(formaGeometrica);



// --------------------------------------------------------------------



// come per le classi le interfacce seguono il concetto di ereditarieta'
// pertanto posso creare un interfaccia che estenda Rettangolo
interface SpecialRettangolo extends Rettangolo {
    // come nelle classi, questa estende tutte le proprieta' del padre (con le loro tipizzazioni)
    // e ne aggiunge di nuove:
    nome: string
}

// la const che crea una nuova interfaccia di Special si presentera' quindi cosi':
const formaSpeciale : SpecialRettangolo = {
    altezza: 15,
    lunghezza: 30,
    nome: 'rettangolo speciale'
}

console.log(formaSpeciale);


//--------------------------------------------------------------------------------------


//implements

// le interfacce dichiarate possono essere implementate anche su classi
// forzandole ad aderire alle direttive imposte dall'interfaccia
// creiamo una classe che implementi le direttive settate
// da SpecialRettangolo che a sua volta estende Rettangolo


class ClasseSpecialRettangolo implements SpecialRettangolo {
    constructor(public altezza: number, public lunghezza: number, public nome: string) {
        this.altezza = altezza;
        this.lunghezza = lunghezza;
        this.nome = nome;
    }
}

const formaSpeciale1: SpecialRettangolo = new ClasseSpecialRettangolo(15, 30, 'rettangolo speciale');

console.log(formaSpeciale);

// e una classe figlia di una classe padre che implementa un interfaccia e' costretta a seguire
// le direttive dell'intefaccia del padre?
// solo per le proprieta' che estende dal padre e se anch'essa decide di implementare l'interfaccia
// nel settare le sue proprieta'
// esempio:

// la classe di seguito e' figlia della classe precedente 
// e sceglie di implementare anch'essa l'interfaccia del padre
class ClasseFigliaSpecialRettangolo extends ClasseSpecialRettangolo implements SpecialRettangolo {
    constructor(altezza: number, lunghezza: number, nome: string, public colore: string) {
        super(altezza, lunghezza, nome);
        this.colore = colore;
    }

    // Aggiungiamo un nuovo metodo specifico della classe figlia
    descrizione(): string {
        return `Rettangolo di colore ${this.colore} chiamato ${this.nome} con altezza ${this.altezza} e lunghezza ${this.lunghezza}.`;
    }
}

const rettangoloFiglio: ClasseFigliaSpecialRettangolo = new ClasseFigliaSpecialRettangolo(15, 30, 'rettangolo speciale', 'rosso');

console.log(rettangoloFiglio);
console.log(rettangoloFiglio.descrizione());

