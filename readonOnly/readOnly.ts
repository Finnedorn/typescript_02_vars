// readonly

// la proprieta' readonly mi permette di far si che il valore di un elemento
// possa solo essere letto e non riedata dopo la prima assegnazione
// questo mi permette di monitorare e mettere in sicurezza l'accesso di alcuni valori rispetto ad altri

// in questo caso non ho modo di attuare modifiche sull'array
const persone: readonly string[] = ['lei', 'lui'];
// persone.push('loro'); // Errore: Cannot push 'loro' because it is a read-only property

// questa cosa si puo applicare con tutti gli altri tipi di dato in ts 

// ecco un esempio con u tipo di dato alias:
type Point = {
    x: number;
    readonly y: number;
};

let point: Point = {
    x: 10,
    y: 20
};

point.x = 20;
// point.y = 15; // Errore: Cannot assign to 'x' because it is a read-only property