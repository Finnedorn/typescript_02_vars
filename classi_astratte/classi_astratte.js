"use strict";
//classi astratte 
// e' una vera e propria classe che non ha come caratteristica quello di istanziare oggetti ma 
// necessita di una classe che la estenda (faccia da figlio) per farlo
class Negozio {
    constructor(maglia, pantalone, scarpe) {
        this.maglia = maglia;
        this.pantalone = pantalone;
        this.scarpe = scarpe;
    }
}
// let store = new Negozio('shirt', 'levis', 'converse'); errore: non e' possibile istanziare un oggetto da una classe astratta
// pertanto creiamo una classe che estenda la classe astratta appena creata
class Outfit extends Negozio {
    constructor(maglia, pantalone, scarpe, cintura) {
        super(maglia, pantalone, scarpe);
        this.cintura = cintura;
    }
    // avendo esteso la classe astratta posos andare a definirne il metodo astratto
    abbigliamento() {
        return 'ecco un outfit';
    }
}
// posso quindi istanziare un nuovo oggetto e sfruttarne i metodi
let serata = new Outfit('polo', 'shorts', 'basse', 'corda');
console.log(serata.abbigliamento());
// creiamo una class base
class BasicCar {
    constructor(power) {
        this.power = power;
    }
}
// creiamo una class che implementi entrambe le interfacce e che sia figlia della classe base
class CarMod extends BasicCar {
    constructor(power, model, type, color) {
        super(power);
        this.model = model;
        this.type = type;
        this.color = color;
    }
    // definisco i moduli astratti all'interno della classe che ne implementa le interfacce
    details() {
        return `car: ${this.model} and ${this.type}`;
    }
    getColor() {
        return `this is the color: ${this.color}`;
    }
}
