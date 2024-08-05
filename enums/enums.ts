// enums o enumerazioni

// e' una sorta di classe, una struttura di dati in cui vado ad enumerare una lista 
// di nomi, ciascuno dei quali avra' un valore 

// creiamone una
enum puntiCardinali {
    // un nome il cui valore non e' dichiarato equivale a 0
    Nord,
    Sud,
    Ovest,
    Est = 1
}

// creiamo quindi una variabile in cui attribuiamo uno dei nomi interno all'enums
// un po come una chiave valore di un oggetto
let punto1 = puntiCardinali.Nord;

// non avendo assegnato alcun tipo di valore a Nord
// in console log il valore stampato sara' 0
console.log(punto1);

let punto2 = puntiCardinali.Est;

console.log(punto2); // dara' come valore 1


// le enums sono utili per archiviare determinati valori numerici in un insieme di nomi che riconducono ad un unica categoria
// es: le taglie dei capi di abbigliamento o mesi o giorni della settimana

// inoltre:
// guardando il file js ti renderai conto che questo e' il modo in cui le enums di base vengono trasposte

// var puntiCardinali;
// (function (puntiCardinali) {
//     puntiCardinali[puntiCardinali["Nord"] = 0] = "Nord";
//     puntiCardinali[puntiCardinali["Sud"] = 1] = "Sud";
//     puntiCardinali[puntiCardinali["Ovest"] = 2] = "Ovest";
//     puntiCardinali[puntiCardinali["Est"] = 1] = "Est";
// })(puntiCardinali || (puntiCardinali = {}));

// molto verboso no???
// creandole come const queste non verranno dichiarate in js

const enum puntiCardinali1 {
    Nord,
    Sud,
    Ovest = 50,
    Est
}

// ma verranno solo compilati gli elementi ai quali ne associeremo i valori (con il valore annesso dichiarato)
let punto3 = puntiCardinali1.Ovest;
// versione compilata:
//let punto3 = 50 /* puntiCardinali1.Ovest */;


// pertanto per una maggiore leggibilita' e' quasi sempre consigliato associare le enums alle const!!!


// -------------------------------------------------------------------------------------------------

// abbiamo visto delle enums con valori numerici, ma i valori possono anche essere string

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

// Uso dell'enum
let dir: Direction = Direction.Up;
console.log(dir); // Output: UP




// o enums con valori misti:
// questo caso e' poco consigliato in quanto le enums sono di base usate per facilitare le leggibilita'
//  del codice ed utilizzare un insieme di valori misti possono essere piu' difficili da leggere e mantenere

enum MixedEnum {
    No = 0,
    Yes = "YES",
    Maybe = 2
}

// Uso dell'enum
let answer: MixedEnum = MixedEnum.Yes;
console.log(answer); // Output: YES

answer = MixedEnum.No;
console.log(answer); // Output: 0

answer = MixedEnum.Maybe;
console.log(answer); // Output: 2

