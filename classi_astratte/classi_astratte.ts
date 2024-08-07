//classi astratte 

// e' una vera e propria classe che non ha come caratteristica quello di istanziare oggetti ma 
// necessita di una classe che la estenda (faccia da figlio) per farlo

abstract class Negozio {
    maglia: string;
    pantalone: string;
    scarpe: string;

    constructor(maglia: string, pantalone: string, scarpe: string){
        this.maglia = maglia;
        this.pantalone = pantalone;
        this.scarpe = scarpe;
    }
    // definiamo un metodo astratto
    // un metodo astratto e' una funzione senza corpo
    // pertanto si questo posso solo specificarne attributo e tipo di dato che esso puo ritornare, in questo caso string
    // un metodo astratto puo essere creato solo all'interno di una classe anch'essa astratta!
    abstract abbigliamento(): string;
}

// let store = new Negozio('shirt', 'levis', 'converse'); errore: non e' possibile istanziare un oggetto da una classe astratta

// pertanto creiamo una classe che estenda la classe astratta appena creata
class Outfit extends Negozio {
    cintura: string;

    constructor(maglia: string, pantalone: string, scarpe: string, cintura: string){
        super(maglia, pantalone, scarpe);
        this.cintura = cintura;
    }
    // avendo esteso la classe astratta posos andare a definirne il metodo astratto
    abbigliamento(): string {
        return 'ecco un outfit';
    }
}
// posso quindi istanziare un nuovo oggetto e sfruttarne i metodi
let serata = new Outfit('polo', 'shorts', 'basse', 'corda');
console.log(serata.abbigliamento());


// --------------------------------------------------------------------



interface Car1{
    model: string;
    type: string;
    // e' possobile creare dei metodi astratti pure all'interno delle interfacce
    details(): string;
}

interface Car2{
    color: string;
    getColor(): string;
}


// creiamo una class base
class BasicCar {
    power: string;
    constructor(power:string){
        this.power = power;
    }
}

// creiamo una class che implementi entrambe le interfacce e che sia figlia della classe base
class CarMod extends BasicCar implements Car1, Car2 {
    model: string;
    type: string;
    color: string;
    

    constructor(power: string, model: string, type: string, color: string){
        super(power);
        this.model = model;
        this.type = type;
        this.color = color;
    }

    // definisco i moduli astratti all'interno della classe che ne implementa le interfacce
    details(): string {
        return `car: ${this.model} and ${this.type}`;
    }

    getColor(): string {
        return `this is the color: ${this.color}`;
    }
}