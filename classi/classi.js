"use strict";
// classi
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Automobile_instances, _Automobile_usatoSi;
class Automobile {
    constructor(modello, marca, colore) {
        _Automobile_instances.add(this);
        this.modello = modello;
        this.marca = marca;
        this.colore = colore;
        this.usata = __classPrivateFieldGet(this, _Automobile_instances, "m", _Automobile_usatoSi).call(this);
    }
    // essendo le proprieta' private protette e quindi inaccessibili dall'esterno
    // l'unico mio modo per poter interagire con queste e' tramite i getter ed i setter 
    // in questo caso io non accedo direttamente alla proprieta' 
    // ma al get che mi returna il valore della proprieta' stessa!!!
    get _colore() {
        return this.colore;
    }
    // mentre nel metodo set io posso cambiarne il valore 
    set coloreSet(setColore) {
        this.colore = setColore;
    }
    // creiamo un metodo:
    dettagliAuto() {
        return this.modello + ' ' + this.marca;
    }
    // come in js anche in ts esistono i metodi statici 
    // ovvero metodi accessibili anche al di fuori della creazione di una nuova istanza
    // appartengono piu' alla classe stessa che all'istanza della classe
    static state() {
        return 'italia';
    }
}
_Automobile_instances = new WeakSet(), _Automobile_usatoSi = function _Automobile_usatoSi() {
    return true;
};
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
    constructor(modello, marca, tipo, lunghezza) {
        this.modello = modello;
        this.marca = marca;
        this.tipo = tipo;
        this.lunghezza = lunghezza;
    }
    get _lunghezza() {
        return this.lunghezza;
    }
    set lunghezzaVeicolo(lungo) {
        this.lunghezza = lungo;
    }
    dettagli() {
        return `veicolo`;
    }
}
// cleo una classe che estenda il padre
class Macchina extends Veicoli {
    // tramite super estendo le proprieta' del padre al figlio
    constructor(modello, marca, tipo, lunghezza, colore) {
        super(modello, marca, tipo, lunghezza);
        this.colore = colore;
    }
}
let ford = new Veicoli('fiesta', '345', 'berlina', 5);
let macchina1 = new Macchina('bmw', '65', 'suv', 9, 'verde');
// accedo dal figlio ai metodi del padre per ereditarieta'
console.log(macchina1.dettagli());
