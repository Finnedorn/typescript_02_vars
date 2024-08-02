// gli array
// come per gli altri tipi di dato anche l'array deve dichiarare il tipo di dato che conterra' al suo interno

// questo array conterra' solo string 
const nomi: string[] = [];
nomi.push('daniele');
console.log(nomi);
// pertanto tentare di pushare un numero portera' solo ad un errore
// nomi.push(8);

// in questo array sono presenti solo numeri
// non avendo dichiarato esplicitimante il tipo di dato al suo interno
// ts attribuisce automaticamente che l'array possa contenere solo numeri 
// in quanto esso stesso contiene gia' elementi di quel tipo
const numeri = [1,4,6];
numeri.push(9);
// pertanto un tentativo di push di un elemento differente porterebbe ad un errore
// numeri.push('ehi');


// in questo array sono presenti sia stringhe che numeri
type StringOrNumberArray = (string | number)[];

let arr: StringOrNumberArray = [1, 'hello', 2, 'world'];
