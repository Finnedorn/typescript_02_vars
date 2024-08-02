// esistono poi delle variabili di tipo any e unknown:
// any ed unknown funzionano nello stesso modo ed entrambi permettono alle variabili di storare valori di tipo sconosciuto

// any:

let qualcunoA: any = 'ciao';
console.log(typeof qualcunoA);
qualcunoA = 10;

// le variabili di tipo any permettono di assegnare un quyalsiasi valore senza effettuare controlli di alcun tipo
// in tal modo si perde la sicurezza offerta dal sistema di tipi di typescript
// questo puo portare a possibili errori in fase di esecuzione che typescript non riconoscerebbe

let valueA: any;
valueA = 10;
valueA = "hello";
valueA = true;

let num: number = valueA; //value potrebbe non essere un numero, in ogni caso ts non ne riconoscerebbe l'errore



// unknown:
let qualcunoB: unknown = 10;
console.log(typeof qualcunoB);
qualcunoB = 'ciao';

// a differenza di any, ts non permette operazioni su variabili di tipo unknown 
// senza prima aver eseguito su di esse un controllo per verificarne il tipo di dato
// questo rende le var di tipo unknown piu sicure e meno soggette a falle non riconosciute 
// in quanto siamo sempre costretti a gestire correttamente il tipo della variabile prima di utilizzarla

let valueB: unknown;
valueB = 10;
valueB = "hello";
valueB = true;

// let num: number = value; // Errore: il tipo 'unknown' non può essere assegnato al tipo 'number'

if (typeof valueB === "number") {
  let num: number = valueB; // Ok, perché abbiamo verificato che 'value' è un numero
}
console.log( typeof valueB);


// quando usare any e quando unknown?

//  in sostanza, unknown e' sempre preferibile in quanto piu' sicura
//  mentre e' bene usare le any solo quando si lavora in applicazioni legacy 
// o con librerie js non tipizzate e quindi dove e' preferibile le flesibilita' a discapito della sicurezza