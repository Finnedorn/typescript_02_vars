// classi

class Automobile {
    public modello: string;
    public marca: string;
    // e' possobile settare un valore predefinito pe runa proprieta'
    // public cilidrata: string = '99cc';
    // o impostare la proprieta' su private 
    private colore: string;
    public usata: boolean;
    constructor(modello:string, marca:string, colore:string){
        this.modello = modello;
        this.marca = marca;
        this.colore = colore;
        this.usata = this.#usatoSi();

    }

    // essendo le proprieta' private protette e quindi inaccessibili dall'esterno
    // l'unico mio modo per poter interagire con queste e' tramite i getter ed i setter 
    // in questo caso io non accedo direttamente alla proprieta' 
    // ma al get che mi returna il valore della proprieta' stessa!!!
    get _colore(): string{
        return this.colore;
    }
    // mentre nel metodo set io posso cambiarne il valore 
    set coloreSet(setColore: string) {
        this.colore = setColore;
    }
    // creiamo un metodo:
    dettagliAuto() {
        return this.modello + ' ' + this.marca;
    }
    // come in js anche in ts esistono i metodi statici 
    // ovvero metodi accessibili anche al di fuori della creazione di una nuova istanza
    // appartengono piu' alla classe stessa che all'istanza della classe
    public static state() : string {
        return 'italia';
    }
    // e' possibile inoltre definire un metodo privato ovvero un metodo non accessibile al di fuori della classe
    // questo e' utile nel caso volessimo applicare un metodo su una delle proprieta' interne alla classe stessa
    #usatoSi(){
        return true;
    }
}

let fiat = new Automobile('ecogpl', 'panda', 'rosso');

console.log(fiat);
console.log(fiat instanceof Automobile);

console.log(fiat.dettagliAuto());

// console.log(fiat.colore); Errore: la proprieta' e' settata su private, pertanto questa non puo' essere letta!

// usando il metodo get io posso accedere alla proprieta' privata
console.log(fiat._colore);
// ed usando il set posso invece cambiarne il valore
fiat.coloreSet = 'verde';

// richiamo il metood statico 
console.log(Automobile.state());

//mi dara' true in quanto ad essa si applica automaticamente il valore statico
console.log(fiat.usata);

// ------------------------------------------------------------------------------


// come in js cosi' in ts il concetto di ereditarieta' permane con le stesse identiche proprieta'
class Veicoli {
    public modello: string;
    public marca: string;
    public tipo: string;

    private lunghezza: number;

    constructor(modello: string, marca: string, tipo: string, lunghezza: number){
        this.modello = modello;
        this.marca = marca;
        this.tipo = tipo;
        this.lunghezza = lunghezza
    }

    get _lunghezza(){
        return this.lunghezza;
    }

    set lunghezzaVeicolo(lungo: number){
        this.lunghezza = lungo;
    }

    dettagli(): string{
        return `veicolo`;
    }
}

// cleo una classe che estenda il padre
class Macchina extends Veicoli {
    public colore: string;
    // tramite super estendo le proprieta' del padre al figlio
    constructor(modello: string, marca: string, tipo: string, lunghezza: number, colore: string,){
        super(modello,marca, tipo, lunghezza);
        this.colore = colore;
    }
}

let ford = new Veicoli('fiesta', '345', 'berlina', 5);
let macchina1 = new Macchina('bmw', '65', 'suv', 9, 'verde');
// accedo dal figlio ai metodi del padre per ereditarieta'
console.log(macchina1.dettagli());