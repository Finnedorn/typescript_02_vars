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

