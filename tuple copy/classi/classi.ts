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