// dati di tipo custom (alias)
// in ts e'possibile creare dei tipi di dati personalizzati

// creo un tipo Programmatore che avra' una serie di dati specifici al suo interno
// sembra un obj ma non lo e', la parola chiave type definisce un alias ovvero un tipo di dato custom
// pertanto in questo momento non sto creando un oggetto ma solo definendo i dati interni ad uno specifico tipo da me creato
type Programmatore = {
    nome: string;
    lavoro: string;
    linguaggi: string[];
};

// una volta creato il tipo posso crearne effettivamente l'oggetto che ne rispetti i canoni 
let persona: Programmatore = {
    nome: 'daniele',
    lavoro: 'front',
    linguaggi: ['js', 'php']
};

console.log(persona);
// il risultato del console log sara':
// {nome: 'daniele', lavoro: 'front', linguaggi: Array(2)}
// essenso un obj, posso anche accedere ad un solo dato al suo interno:
console.log(persona.nome);



// ecco invece qualche esempio di dati di tipo alias, piu' semplice:

// il tipo impiegato sara' di tipo string o number
type Impiegato = string | number;

let utente: Impiegato;

utente = 21;
utente = 'dirigente';
console.log(utente);


// il tipo Greet ha una funzione definita al suo interno
type Greet = (name: string) => string;

const greet: Greet = (name) => `Hello, ${name}!`;

console.log(greet('Alice'));  // Output: Hello, Alice!


